import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Good } from '~/types/Good'
import { Carter_One } from 'next/font/google'

interface GoodsState {
  goods: Good[]
  favs: Good[]
  cart: Good[]
}

const initialState: GoodsState = {
  favs: [],
  goods: [],
  cart: [],
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addAllGoods: (state, action: PayloadAction<Good[]>) => {
      state.goods = action.payload;
    },
    addToFavs: (state, action: PayloadAction<Good>) => {
      state.favs.push(action.payload);
    },
    removeFromFavs: (state, action: PayloadAction<number>) => {
      state.favs = state.favs.filter(item => item.id !== action.payload);
    },
    addToCart: (state, action: PayloadAction<Good>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
})

export const {
  addToFavs,
  removeFromFavs,
  addAllGoods,
  addToCart,
  removeFromCart,
} = goodsSlice.actions

export default goodsSlice.reducer
