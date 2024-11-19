import { type AnyAction, combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import { categoriesApi } from "./apis/categories.api";
import { filesApi } from "./apis/files.api";
import { productApi } from "./apis/product.api";
import { usersApi } from "./apis/users.api";

const appReducer = combineReducers({
  global: globalReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [filesApi.reducerPath]: filesApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "RESET") {
    // Возвращаем все состояния к их начальному состоянию
    state = undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return appReducer(state, action);
};

export default rootReducer;
