import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type Good } from '~/types/Good';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getGoods: builder.query<Good[], unknown>({
      query: () => `products`,
    }),
  }),
})

export const { useGetGoodsQuery } = goodsApi
