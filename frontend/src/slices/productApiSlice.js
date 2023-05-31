import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
      onQueryFailed: (error) => {
        console.log('Error while fetching products', error);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
