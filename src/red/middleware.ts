import { authApi } from "./apis/auth.api";
import { categoriesApi } from "./apis/categories.api";
import { filesApi } from "./apis/files.api";
import { productApi } from "./apis/product.api";
import { usersApi } from "./apis/users.api";

export const middleware = [
  authApi.middleware,
  categoriesApi.middleware,
  filesApi.middleware,
  productApi.middleware,
  usersApi.middleware,
];
