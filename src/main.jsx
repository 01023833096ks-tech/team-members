import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TeamProvider } from "./components/contexts/teamMembersContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeamProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </TeamProvider>
  </StrictMode>,
);
