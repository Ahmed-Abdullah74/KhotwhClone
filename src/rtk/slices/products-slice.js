// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "productsSilce/fetchproducts",
//   async () => {
//     const res = await fetch("http://localhost:9000/menProducts");
//     const data = await res.json();
//     return data;
//   }
// );

// export const productsSilce = createSlice({
//   initialState: [],
//   name: "productsSilce",
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const {} = productsSilce.actions;
// export default productsSilce.reducer;
