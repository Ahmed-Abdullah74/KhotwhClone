import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the offcanvas sidebar
const initialState = {
  isOpen: false,
  // Add more properties here if needed
};

// Define the reducers for the offcanvas sidebar
const reducers = {
  openSidebar: (state) => {
    // Set the isOpen property to true
    state.isOpen = true;
  },
  closeSidebar: (state) => {
    // Set the isOpen property to false
    state.isOpen = false;
  },
  // Add more reducers here if needed
};

// Create the slice with the name, initial state, and reducers
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers,
});

// Export the action creators and the reducer
export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
