//create data structure
import { configureStore } from "@reduxjs/toolkit";
import Table1ReducerSlice from "../reducers/Table1ReducerSlice";

const Store = configureStore({
  reducer: {
    table1: Table1ReducerSlice,
  },
});

export default Store;
