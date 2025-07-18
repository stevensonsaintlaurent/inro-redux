import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import store from "./store copy2 copy";
import { Provider } from "react-redux";

store.dispatch({ type: "account/deposit", payload: 0 });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
