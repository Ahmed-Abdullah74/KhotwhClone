import { createSlice } from '@reduxjs/toolkit';



const openCartSlice = createSlice({
  name: 'openOurCart',
  initialState: {
    isCartOpen: false
  },
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    
  },
});

export const {openCart , closeCart} = openCartSlice.actions;

export default openCartSlice.reducer;
