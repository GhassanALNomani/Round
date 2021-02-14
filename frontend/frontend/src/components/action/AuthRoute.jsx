import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserProfile from "../pages/UserProfile"
import Create from './Create';

export default function AuthRoute(props) {
  if (props.auth.isLoggedIn) {
    return (
      <Route>
        <UserProfile
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