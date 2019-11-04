import React from "react";
import UserDetails from "./userDetails.js";

export const UserContext = React.createContext();

export default function UserDetailsContext() {
  return (
    <>
      <UserContext.Provider value="Mukesh">
        <UserDetails />
      </UserContext.Provider>
    </>
  );
}
