import { createSlice, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  applyMiddleware: [thunk],
  reducers: {
    setCurrentUserStart: (state) => {
      state.loading = true;
    },
    setCurrentUserSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    setCurrentUserFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  setCurrentUserStart,
  setCurrentUserSuccess,
  setCurrentUserFailure,
} = currentUserSlice.actions;
export default currentUserSlice.reducer;
