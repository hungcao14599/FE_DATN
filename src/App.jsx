import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import SignInSignup from "./components/SignInSignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/tlu" />
        <Route path="/tlu/login" component={SignInSignup}></Route>
        <Route path="/tlu/register" component={SignInSignup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
