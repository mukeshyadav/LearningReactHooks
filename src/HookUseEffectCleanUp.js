import React, { useState, useEffect } from "react";
import UseEffectOnce from "./HookUseEffectBindEventOnce";

export default function HookUseEffectCleanUp() {
  const [show, setShowHide] = useState(true);

  return (
    <>
      <button onClick={() => setShowHide(!show)}>Show/Hide</button>
      <div />
      {show && <UseEffectOnce />}
    </>
  );
}
