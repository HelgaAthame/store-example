import { categoriesApi } from "./apis/categories.api";
import { filesApi } from "./apis/files.api";
import { productApi } from "./apis/product.api";
import { usersApi } from "./apis/users.api";

export const middleware = [
  categoriesApi.middleware,
  filesApi.middleware,
  productApi.middleware,
  usersApi.middleware,
];
