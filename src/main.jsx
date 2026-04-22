import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/floating-badge.css";
import "./styles/background.css";
import "./styles/projects.css";
import "./styles/about.css";
import "./styles/cookie-widget.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
