import { createAsyncThunk } from "@reduxjs/toolkit";
import { Shop } from "../types";
import axios from "axios";

export const loadShops = createAsyncThunk("shop/loadShops", async () => {
  const response = await axios.get('/path/to/shops.json');
  const shops: Shop[] = response.data;
  return shops.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
});
