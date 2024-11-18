import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "~/red/queries/baseQueryWithReauth";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const {} = productApi;
