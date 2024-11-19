import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/red/queries/baseQuery";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const {} = productApi;
