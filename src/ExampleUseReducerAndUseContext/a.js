import React, { useContext } from "react";

import { CountContext } from "./index";

export default function MyComponentA() {
  const countContext = useContext(CountContext);
  return (
    <>
      <button
        onClick={() => countContext.dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => countContext.dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <button onClick={() => countContext.dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}
