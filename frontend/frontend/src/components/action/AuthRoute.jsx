import React from "react";
import { Route, Redirect } from "react-router-dom";
import Profile from "../pages/Profile"


export default function AuthRoute(props) {
  if (props.auth.isLoggedIn) {
    return (
      <Route>
        <Profile
        setAuth = {props.setAuth}
        auth = {props.auth}
        user={props.user}
        userProfile={props.userProfile}
        setUserProfile={props.setUserProfile}
        />
      </Route>
    );
  } else {
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }
}