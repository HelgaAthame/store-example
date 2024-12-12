import { categoriesApi } from "./apis/categories.api";

export const middleware = [
  categoriesApi.middleware,
];
