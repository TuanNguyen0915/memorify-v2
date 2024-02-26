import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedPost: null,
  loading: false,
  error: false,
};

const selectedPostsSlice = createSlice({
  name: "selectedPost",
  initialState,
  reducers: {
    setSelectedPostStart: (state) => {
      state.loading = true;
    },
    setSelectedPostSuccess: (state, action) => {
      state.loading = false;
      state.selectedPost = action.payload;
      state.error = false;
    },
    setSelectedPostFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
  }
})

export const {setSelectedPostFailure, setSelectedPostStart, setSelectedPostSuccess} = selectedPostsSlice.actions
export default selectedPostsSlice.reducer