import { createAsyncThunk } from "@reduxjs/toolkit";
import { Shop } from "../types";

export const loadShops = createAsyncThunk("shop/loadShops", async () => {
  try {
    const response = await fetch("./data/shops.json");
    const data: Shop[] = await response.json();
    return data.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
  } catch (error) {
    throw error;
  }
});
