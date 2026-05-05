import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/index.js";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
);
