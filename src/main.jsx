import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { PopularMediaProvider } from "./context/PopularMediaProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PopularMediaProvider>
        <App />
      </PopularMediaProvider>
    </BrowserRouter>
  </StrictMode>,
);
