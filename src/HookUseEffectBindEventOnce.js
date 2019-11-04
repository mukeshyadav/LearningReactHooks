import React, { useState, useEffect } from "react";

export default function UseEffectOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); //Blank array will add only once bind event

  return (
    <>
      Mouse X: {x} Y: {y}
    </>
  );
}
