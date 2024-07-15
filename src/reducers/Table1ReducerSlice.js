import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  // loading: false,
  // error: "",
  table1: {},
  value: 0,
};
//external API calling function for fetch table data
export const fetchTable1Result = createAsyncThunk(
  "table1/fetchTable1Result",
  async () => {
    const response = await axios.get(process.env.REACT_APP_GET_TABLE1_URL);
    return response.data;
  }
);

const Table1ReducerSlice = createSlice({
  name: "table1",
  initialState,
  reducers: {
    setTable1ResultAction: (state, action) => {
      state.table1 = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchTable1Result.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchTable1Result.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.table1 = action.payload;
  //     state.error = "";
  //   });
  //   builder.addCase(fetchTable1Result.rejected, (state, action) => {
  //     state.loading = false;
  //     state.table1 = {};
  //     state.error = action.error.message || "failed";
  //   });
  // },
});

export const {
  setTable1ResultAction,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} = Table1ReducerSlice.actions;

export default Table1ReducerSlice.reducer;
