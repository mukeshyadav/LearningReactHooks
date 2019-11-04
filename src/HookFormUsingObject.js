import React, { useState } from "react";

export default function HookForm() {
  const [name, setName] = useState({ fName: "", lName: "" });

  return (
    <>
      Your Full Name: {name.fName} {name.lName}
      <div />
      <input
        type="text"
        value={name.fName}
        placeholder="First Name"
        onChange={e => setName({ ...name, fName: e.target.value })}
      />
      <input
        type="text"
        value={name.lName}
        placeholder="Last Name"
        onChange={e => setName({ ...name, lName: e.target.value })}
      />
    </>
  );
}
