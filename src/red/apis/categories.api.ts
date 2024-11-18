import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "~/red/queries/baseQueryWithReauth";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const {} = categoriesApi;
