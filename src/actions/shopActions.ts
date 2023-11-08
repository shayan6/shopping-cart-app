import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadShops = createAsyncThunk('shop/loadShops', async () => {
  try {
    const response = await fetch('./data/shops.json');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
