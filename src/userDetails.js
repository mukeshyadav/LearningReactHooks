import React, { useContext } from "react";
import { UserContext } from "./HookUseContext";

export default function UserDetails() {
  const userDetails = useContext(UserContext);

  return <>{userDetails}</>;
}
