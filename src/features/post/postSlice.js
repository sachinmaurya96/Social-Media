import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPost, getPostById, getTimeLineData, likePost, uploadImage } from "./postApi";

const initialState = {
    posts:[],
    loading:false,
    likes:null,
    postByID:[],
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
    "post/uploadImg",
    async (imgData) => {
      const response = await uploadImage(imgData);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const getTimeLinePostAsync = createAsyncThunk(
    "post/getTimeLinePost",
    async (userId) => {
      const response = await getTimeLineData(userId);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const likePostAsync = createAsyncThunk(
    "post/likePost",
    async (likePostData) => {
      const response = await likePost(likePostData);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const getPostByIdAsync = createAsyncThunk(
    "post/getPostById",
    async (userId) => {
      const response = await getPostById(userId);
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
      .addCase(getTimeLinePostAsync.pending, (state) => {
        state.status = "loading";
       
      })
      .addCase(getTimeLinePostAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.posts = action.payload
       
        console.log(state.posts)
      })
      .addCase(likePostAsync.pending, (state) => {
        state.status = "loading";
        state.loading=true
      })
      .addCase(likePostAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.likes = action.payload
        state.loading=false
      })
      .addCase(getPostByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostByIdAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.postByID = action.payload
      })
  },
});

export const selectPostLoading = (state)=>state.post.loading
export const selectTimeLinePost = (state)=>state.post.posts
export const selectPostByID = (state)=>state.post.postByID

export default postSlice.reducer;
