import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../../types/item";
import api from "../../api";
import { Order } from "../../types/order";
import { CartItem } from "../../types/order";

type InitialState = {
  order: Order;
  error: boolean;
  loading: boolean;
};

const initialPaymentInfo = {
  cardNumber: null,
  expires: "",
  cardOwnerName: "",
  cvv: null,
};

let initialState: InitialState = {
  order: {
    userId: "",
    userEmail: "",
    list: [],
    totalCost: 0,
    paymentId: null,
    paymentInfo: initialPaymentInfo,
  },
  error: false,
  loading: false,
};

export const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.order.list.push(action.payload);
    },
    deleteFromOrder: (state, action) => {
      state.order.list = state.order.list.filter(
        (orderItem: CartItem) => orderItem._id !== action.payload
      );
    },
    specifyOption: (state, action) => {
      const { id, option } = action.payload;

      const editedItem = state.order.list.find(
        (orderItem: CartItem) => orderItem._id == id
      );
      if (editedItem) {
        editedItem.option = option;
        state.order.totalCost += option.price;
      }
    },
    addPaymentInfo: (state, action) => {
      state.order.paymentInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fakePay.fulfilled, (state, action) => {
      state.order.paymentId = action.payload;
      state.error = false;
      state.loading = false;

      state.order.paymentInfo = { ...initialPaymentInfo };
    });
    builder.addCase(fakePay.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fakePay.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { addToOrder, deleteFromOrder, specifyOption } = slice.actions;

export const fakePay: any = createAsyncThunk(
  "orders/fakePay",
  async (data, thunkAPI) => {
    const paymentInfoPayload = (thunkAPI.getState() as InitialState).order
      ?.paymentInfo;
    alert(paymentInfoPayload);
    setTimeout(() => {
      const fakePaymentId = "5678";
      return fakePaymentId;
    }, 2000);
  }
);

export default slice.reducer;
