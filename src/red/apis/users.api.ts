import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "~/red/queries/baseQueryWithReauth";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const {} = usersApi;
