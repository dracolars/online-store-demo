import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/App.js";
// Import the store here.
import { store } from "./app/store.js";
// Pass state and dispatch props to the <App /> component.

const root = ReactDOM.createRoot(document.getElementById("root"));

const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
};
render();
store.subscribe(render);
