import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../@api";
export const loginApi = createAsyncThunk("loginApi", async () => {
  return await authApi.signinAPi();
});

const reducer = createSlice({
  name: "authReducer",
  initialState: { authData: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginApi.fulfilled, (state, action) => {
      state.authData = action.payload;
    });
  },
});

export const AuthReducer = reducer.reducer;
