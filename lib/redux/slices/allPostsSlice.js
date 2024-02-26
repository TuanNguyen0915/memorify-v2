import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: null,
  loading: false,
  error: false,
};

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    setAllPostsStart: (state) => {
      state.loading = true;
    },
    setAllPostsSuccess: (state, action) => {
      state.loading = false;
      state.allPosts = action.payload;
      state.error = false;
    },
    setAllPostsFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { setAllPostsStart, setAllPostsSuccess, setAllPostsFailure } =
  allPostsSlice.actions;
export default allPostsSlice.reducer;
