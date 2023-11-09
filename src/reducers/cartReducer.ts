// src/reducers/cartReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  shop: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [
        {
          id: "26f4d9cc-eef8-4823-a19b-6aad6048ba5a",
          name: "bread",
          shop: "selver",
        },
        {
          id: "83118bd2-cf4d-483e-9e52-10c8a4cbf172",
          name: "milk",
          shop: "rimi",
        },
        {
          id: "154b81e6-e881-4f70-a248-958ac0ff78bf",
          name: "butter",
          shop: "maxima",
        },
      ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
