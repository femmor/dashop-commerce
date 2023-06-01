import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : {
      cartItems: [],
    };

// Add decimals to price
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x) => x._id === item._id
      );
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        )
      );

      // Calculate shipping price - If order is over $100, shipping is free, otherwise shipping is $10
      state.shippingPrice = addDecimals(
        state.itemsPrice > 100 ? 0 : 10
      );

      // Calculate tax price - 15% tax
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );
      // Calculate total price - items price + shipping price + tax price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      // Save cart items to local storage so that when user refreshes the page, the cart items will still be there
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems)
      );
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
