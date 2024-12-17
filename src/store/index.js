import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice.js';
import cartReducer from './slices/cartSlice.js';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
