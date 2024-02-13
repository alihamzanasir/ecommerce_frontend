import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeApi } from "../../../@api";
import axios from "axios";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const fetchUserById = createAsyncThunk(
  "homeApi/fetchUserById",
  async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return data;
  },
);

const homeReducer = createSlice({
  name: "homeAPi",
  initialState: { entities: null, loading: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state: any, action: any) => {
      state.entities = action.payload;
    });
  },
});

export const homeAPiReducer = homeReducer.reducer;
