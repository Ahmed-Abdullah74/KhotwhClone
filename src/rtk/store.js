import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import sidebarSlice from "../rtk/slices/sideBarSlice";
import WomenProductReducer from "./slices/WomenProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice,
    sidebar: sidebarSlice,
    womenProducts: WomenProductReducer,
  },
});
