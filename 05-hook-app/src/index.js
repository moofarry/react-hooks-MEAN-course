import React from "react";
import { createRoot } from "react-dom/client";
// import { Memo } from "./components/06-memo/Memo";
// import { MemoHook } from "./components/06-memo/MemoHook";
// import { CallbackHook } from "./components/06-memo/CallbackHook";
// import { Padre } from "./components/07-tarea-memo/Padre";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
// import { LayoutEffect } from "./components/05-useLayaoutEffect/LayoutEffect";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { HookApp } from "./HookApp";
//import { TodoApp } from "./components/08-useReducer/TodoApp";

import { MainApp } from "./components/09-useContext/MainApp";
const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(<MainApp />);
