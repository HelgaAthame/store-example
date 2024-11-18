import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Good } from "~/types/Good";

interface GoodsState {
  goods: Good[];
  favs: Good[];
  cart: Good[];
  selected: null | Good;
}

const initialState: GoodsState = {
  favs: [],
  goods: [],
  cart: [],
  selected: null,
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addAllGoods: (state, action: PayloadAction<Good[]>) => {
      state.goods = action.payload;
    },
    addToFavs: (state, action: PayloadAction<Good>) => {
      state.favs.push(action.payload);
    },
    removeFromFavs: (state, action: PayloadAction<number>) => {
      state.favs = state.favs.filter((item) => item.id !== action.payload);
    },
    addToCart: (state, action: PayloadAction<Good>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setSelected: (state, action: PayloadAction<Good | null>) => {
      state.selected = action.payload;
    },
  },
});

export const {
  addToFavs,
  removeFromFavs,
  addAllGoods,
  addToCart,
  removeFromCart,
  setSelected,
} = goodsSlice.actions;

export default goodsSlice.reducer;
