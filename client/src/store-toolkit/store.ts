import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import items from "./slices/items";
import order from "./slices/order";
//import orders from "./slices/orders";
//import {ordersReducer} from './slices/ordersReducer';

const store = configureStore({
  reducer: {
    items,
    order,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
