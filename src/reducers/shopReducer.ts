import { createSlice } from "@reduxjs/toolkit";
import { loadShops } from "../actions/shopActions";
import { ShopState } from "../types";

const initialState: ShopState = {
  shops: localStorage.getItem("shops")
    ? JSON.parse(localStorage.getItem("shops")!)
    : [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadShops.fulfilled, (state, action) => {
      localStorage.setItem("shops", JSON.stringify(action.payload));
      state.shops = action.payload;
    });
  },
});

export default shopSlice.reducer;
