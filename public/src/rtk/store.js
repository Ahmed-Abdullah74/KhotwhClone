import { configureStore } from "@reduxjs/toolkit";
import productsSilce from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import sidebarSlice from "../rtk/slices/sideBarSlice";

export const store = configureStore({
  reducer: {
    products: productsSilce,
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
});
