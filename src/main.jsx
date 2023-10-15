import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GameContextProvider } from "./contexts/GameContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GameContextProvider>
);
