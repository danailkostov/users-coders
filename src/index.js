import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1yjqi80h.eu.auth0.com"
      clientId="W7ILONJbNoR5nAiyBTGAAGYE6o37YbyZ"
      redirectUri={window.location.origin}
    >
      <CssBaseline />
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
