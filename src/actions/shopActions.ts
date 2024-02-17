import { createAsyncThunk } from "@reduxjs/toolkit";
import { Shop } from "../types";
import axios from "axios";

export const loadShops = createAsyncThunk("shop/loadShops", async () => {
  try {
    const response = await axios.get("/data/shops.json");
    const shops: Shop[] = response.data;
    return shops.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
});
