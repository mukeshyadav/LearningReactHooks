import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function UseReducerCounterComplex() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      First Counter: {state} <div />
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div />
      Second Counter: {stateTwo}
      <div />
      <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatchTwo({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
    </>
  );
}
