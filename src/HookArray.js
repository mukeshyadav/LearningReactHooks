import React, { useState } from "react";

export default function HooksArrayRandomNumberList() {
  const [items, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 }
    ]);
  };

  return (
    <>
      <ul>
        {items.map(obj => (
          <li key={obj.id}>{obj.value}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </>
  );
}
