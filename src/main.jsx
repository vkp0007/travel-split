import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import {
  AuthProvider,
} from "./modules/auth/context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);