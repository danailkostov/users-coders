import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
