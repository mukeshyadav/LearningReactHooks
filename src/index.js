import React from "react";
import ReactDOM from "react-dom";
// import Counter from "./HookCounter";
// import HookForm from "./HookFormUsingObject";
// import HooksArrayRandomNumberList from "./HookArray";
// import UpdateTitleUsingUseEffectHook from "./HookUseEffect";
// import UseEffectOnce from "./HookUseEffectBindEventOnce";
// import HookUseEffectCleanUp from "./HookUseEffectCleanUp";
// import DataFetchingUsingEffect from "./HookFetchDataUsingEffect";
// import UserDetailsContext from "./HookUseContext";
// import UseReducerCounterComplex from "./HookUseReducerComplex";
import Counter from "./ExampleUseReducerAndUseContext/";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
