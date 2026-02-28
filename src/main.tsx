import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LingoProvider } from "@lingo.dev/compiler/react";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LingoProvider devWidget={{ enabled: false }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LingoProvider>
  </StrictMode>,
);
