import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/red/queries/baseQuery";

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const {} = filesApi;
