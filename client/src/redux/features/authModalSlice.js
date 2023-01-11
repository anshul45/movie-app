import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
  name: "AuthModal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    setAuthModelOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModelOpen } = authModalSlice.actions;

export default authModalSlice.reducer;
