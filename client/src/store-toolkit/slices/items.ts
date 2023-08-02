import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../../types/item";
import api from "../../api";

type InitialState = {
  items: Item[];
  error: boolean;
  loading: boolean;
};

let initialState: InitialState = {
  items: [],
  error: false,
  loading: false,
};

export const slice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllItems.fulfilled, (state, action) => {
      state.items = action.payload;
	  state.error = false;
	  state.loading = false;
    });
	builder.addCase(fetchAllItems.pending, (state, action) => {
		state.loading = true;
		state.error = false;
	  });
    builder.addCase(fetchAllItems.rejected, (state, action) => {
      state.error = true;
	  state.loading = false;
    });
  },
});

export const fetchAllItems: any = createAsyncThunk(
  "items/fetchAllItems",
  async () => {
    const response = await api.get("/items", { withCredentials: true });
    console.log("response", response)
    return response.data;
  }
);

export default slice.reducer;
