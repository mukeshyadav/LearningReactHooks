import React, { useState } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  const increaseCountBy = val => {
    for (let i = 0; i < val; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <>
      {count}
      <div />
      <button onClick={() => setCount(initialCount)}>Reset Count </button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increase Count
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrease Count
      </button>
      <button onClick={() => increaseCountBy(5)}>Increase Count by 5 </button>
    </>
  );
}
