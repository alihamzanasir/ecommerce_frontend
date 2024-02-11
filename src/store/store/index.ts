import { configureStore } from "@reduxjs/toolkit";
import { homeAPiReducer } from "../reducer/homeReducer";

export const store = configureStore({
  reducer: {
    homeAPi: homeAPiReducer,
  },
});
