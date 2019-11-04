import React, { useState, useEffect } from "react";

export default function UpdateTitleUsingUseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("click");
    document.title = `Clicked ${count} times`;
  }, [count]); // adding callback parameter it will run only when count value change

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count: {count}
      </button>
    </>
  );
}
