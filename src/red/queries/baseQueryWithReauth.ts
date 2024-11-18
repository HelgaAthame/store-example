import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { baseQuery } from "./baseQuery";

const mutex = new Mutex();

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    const state = api.getState();
    const refreshToken =
      typeof window !== "undefined"
        ? localStorage.getItem("refresh_token")
        : (
            state as {
              token: {
                refresh_token: string | null;
              };
            }
          ).token.refresh_token;

    type RefreshResultType = {
      data: {
        data: {
          access_token: string;
        };
      };
    };
    if (refreshToken === null) {
      //log out
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
    } else {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        const refreshResult = (await baseQuery(
          {
            url: "/auth/refresh-token",
            method: "POST",
            body: {
              refreshToken: refreshToken,
            },
          },
          api,
          extraOptions
        )) as RefreshResultType;
        if ("error" in refreshResult) {
          //log out
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("access_token");
          if (typeof window !== undefined) {
            window.location.href = "/";
          }
        } else if (refreshResult.data.data.access_token) {
          release();
          const accessToken = refreshResult.data.data.access_token;          
          localStorage.setItem("access_token",accessToken);
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        }
      } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }
  }
  return result;
};
