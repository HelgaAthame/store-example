import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Good } from '~/types/Good'

interface GoodsState {
  goods: Good[]
  favs: Good[],
}

const initialState: GoodsState = {
  favs: [],
  goods: [],
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addAllGoods: (state, action: PayloadAction<Good[]>) => {
      state.goods = action.payload;
    },
    addToFavs: (state, action: PayloadAction<number>) => {
      const itemToAdd = state.goods.find(item => item.id = action.payload);
      if (itemToAdd) state.favs.push(itemToAdd);
    },
    removeFromFavs: (state, action: PayloadAction<number>) => {
      const indexOfItemToRemove = state.favs.findIndex(item => item.id = action.payload);
      if (indexOfItemToRemove) state.favs.splice(indexOfItemToRemove, 1);
    },
  },
})

export const { addToFavs, removeFromFavs } = goodsSlice.actions

export default goodsSlice.reducer
