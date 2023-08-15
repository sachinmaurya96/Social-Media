import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPost, uploadImage } from "./postApi";

const initialState = {
    posts:[]
};

export const createPostAsync = createAsyncThunk(
  "post/createPost",
  async (postData) => {
    const response = await createPost(postData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const uploadImgAsync = createAsyncThunk(
    "post/ uploadImg",
    async (imgData) => {
      const response = await uploadImage(imgData);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );



export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostAsync.pending, (state) => {
        state.status = "loading";
        state.loading=true
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.posts.push(action.payload)
        state.loading=false
      })
      .addCase(uploadImgAsync.pending, (state) => {
        state.status = "loading";
        state.loading=true
      })
      .addCase(uploadImgAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        console.log(action.payload)
        state.loading=false
      })
  },
});

export const selectPostLoading = (state)=>state.post.loading

export default postSlice.reducer;
