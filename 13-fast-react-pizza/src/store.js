import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice.js';
import cartReducer from './features/cart/cartSlice.js';

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
