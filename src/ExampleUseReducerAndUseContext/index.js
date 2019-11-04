import React, { useReducer } from "react";
import MyComponentA from "./a.js";
import MyComponentB from "./b.js";

export const CountContext = React.createContext();

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

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
        Count: {count}
        <div />
        Component A: <MyComponentA />
        <div />
        Component B: <MyComponentB />
      </CountContext.Provider>
    </>
  );
}
