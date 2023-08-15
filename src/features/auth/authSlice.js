import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, createUser } from "./authApi";

const initialState = {
  status: "idle",
  loggedInUser:null,
  loading:false
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const LoginUserAsync = createAsyncThunk(
  "user/loginkUser",
  async (userData) => {
    const response = await loginUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
        state.loading=true
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        localStorage.setItem("profile",JSON.stringify(action.payload))
        state.loading=false
        state.loggedInUser = JSON.parse(localStorage.getItem("profile"));
      })
      .addCase(LoginUserAsync.pending, (state) => {
        state.status = "loading";
        state.loading=true
      })
      .addCase(LoginUserAsync.fulfilled, (state, action) => {
        console.log("action",action.payload)
        state.status = "fulfilled";
        state.loggedInUser = action.payload;
        localStorage.setItem("profile",JSON.stringify(action.payload))
        state.loading=false
      });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectAuthLoading = (state) => state.auth.loading;
export default authSlice.reducer;
