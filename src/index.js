import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import { AuthProvider } from "./context/AuthProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );