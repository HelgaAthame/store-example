import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "~/red/queries/baseQueryWithReauth";

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const {} = filesApi;
