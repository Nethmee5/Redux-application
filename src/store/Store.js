//create data structure
import { configureStore } from "@reduxjs/toolkit";
import Table1ReducerSlice from "../reducers/Table1ReducerSlice";
import ProductsSlice from "../reducers/ProductsSlice";
const Store = configureStore({
  reducer: {
    table1: Table1ReducerSlice,
    product: ProductsSlice
  },
  
});

export default Store;
