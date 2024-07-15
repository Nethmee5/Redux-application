import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./reducers/Table1ReducerSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.table1.value);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrementByAmount(5))}>
        Decrement by 5
      </button>
    </div>
  );
};

export default Counter;
