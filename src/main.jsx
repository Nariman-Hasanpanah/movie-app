import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { PopularMediaProvider } from "./context/PopularMediaProvider.jsx";
import { MediaProvider } from "./context/MediaProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PopularMediaProvider>
        <MediaProvider>
          <App />
        </MediaProvider>
      </PopularMediaProvider>
    </BrowserRouter>
  </StrictMode>,
);
