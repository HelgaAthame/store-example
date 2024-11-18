import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/red/queries/baseQuery";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const {} = usersApi;
