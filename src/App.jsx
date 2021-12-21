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
import Groups from "./components/Group";
import Group from "./components/Group/Group";
import Friends from "./components/Friend";
import Chats from "./components/Chat";
function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/tlu/login" />
        <Route path="/tlu/login" component={SignInSignup}></Route>
        <Route path="/tlu/register" component={SignInSignup}></Route>

        <Route path="/tlu/home" component={Home}></Route>
        <Route path="/tlu/profile/:username" component={Profile}></Route>
        <Route path="/tlu/groups" component={Groups} exact></Route>
        <Route path="/tlu/group/:id" component={Group}></Route>
        <Route path="/tlu/friends" component={Friends}></Route>
        <Route path="/tlu/messages" component={Chats}></Route>
      </Switch>
    </Router>
  );
}

export default App;
