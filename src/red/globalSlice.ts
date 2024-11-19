import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IAppSlice {
  products: IProduct[];
  favs: IProduct[];
  cart: IProduct[];
  selected: null | IProduct;
}

const initialState: IAppSlice = {
  favs: [],
  products: [],
  cart: [],
  selected: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllIProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    addToFavs: (state, action: PayloadAction<IProduct>) => {
      state.favs.push(action.payload);
    },
    removeFromFavs: (state, action: PayloadAction<number>) => {
      state.favs = state.favs.filter((item) => item.id !== action.payload);
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setSelected: (state, action: PayloadAction<IProduct | null>) => {
      state.selected = action.payload;
    },
  },
});

export const {
  addToFavs,
  removeFromFavs,
  addAllIProducts,
  addToCart,
  removeFromCart,
  setSelected,
} = productsSlice.actions;

export default productsSlice.reducer;
