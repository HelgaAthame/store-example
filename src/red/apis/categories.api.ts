import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/red/queries/baseQuery";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCategories: builder.mutation<string[], number | undefined>({
      query: (limit) => {
        return {
          url: `/`,
          method: "GET",
          params: {
            limit: limit ?? 100,
          },
        };
      },
    }),
  }),
});

export const { useGetCategoriesMutation } = categoriesApi;
