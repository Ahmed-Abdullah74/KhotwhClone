import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import sidebarSlice from "../rtk/slices/sideBarSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
});
