// src/reducers/shopReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import { loadShops } from '../actions/shopActions';
import { ShopState } from '../types';

const initialState: ShopState = {
  shops: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadShops.fulfilled, (state, action) => {
      state.shops = action.payload;
    });
  },
});

export default shopSlice.reducer;
