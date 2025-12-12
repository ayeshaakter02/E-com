import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: { value: null },
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state) => {
      state.value = null; // user remove
    },
  },
});

export const { userInfo, logoutUser } = userSlice.actions;
export default userSlice.reducer;
