import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import shopReducer from '../reducers/shopReducer';
import commonReducer from '../reducers/commonReducer';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    common: commonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
