import { type AnyAction, combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import { categoriesApi } from "./apis/categories.api";

const appReducer = combineReducers({
  global: globalReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
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
