import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import SignInSignup from "./components/SignInSignUp";
import Profile from "./components/Profile";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/tlu/login" />
        <Route path="/tlu/login" component={SignInSignup}></Route>
        <Route path="/tlu/register" component={SignInSignup}></Route>
        <Route path="/tlu/home" component={Home}></Route>
        

        <Route path="/tlu/profile/:username" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
