import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./slices/currentUserSlice";
// import allPostsSlice from "./slices/allPostsSlice";
import selectedPostSlice from "./slices/selectedPostSlice";
export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    // allPosts: allPostsSlice,
    selectedPost: selectedPostSlice
  },
});
