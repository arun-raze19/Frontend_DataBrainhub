// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";  // Use named import

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap the app with Provider and pass the store */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

