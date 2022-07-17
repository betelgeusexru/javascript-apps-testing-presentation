import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducers/counterReducer";
import { getCounterValue } from "../store/reducers/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>
        value=
        <span data-testid="value">{value}</span>
      </h1>
      <button data-testid="increment" onClick={onIncrement}>
        +
      </button>
      <button data-testid="decrement" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};
