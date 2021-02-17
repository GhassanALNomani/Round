import './App.css';
import SignUp from "./components/action/SignUp"
import Login from "./components/action/Login"
import Create from './components/action/Create';
import NavBar from './components/action/NavBar';
import Home from "./components/pages/Home";
import ShowOnePlace from './components/pages/ShowOnePlace';
import AuthRoute from './components/action/AuthRoute';
import { AboutUs } from './components/pages/AboutUs';
import { Footer } from './components/pages/Footer';
import EditUserInfo from "./components/pages/EditUserInfo"
import axios from "axios"
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";
import EditPlace from "./components/action/EditPlace"
import UserList from './components/pages/UserList'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [loadingData, setLoadingData] = useState(false);
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [userData, setUserData] = useState({ currentDataUser: null })
  const [userProfile, setUserProfile] = useState({});
  const [dataLoaded, setDataloaded] = useState(false);
  
  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      const currentPlace = jwt_decode(jwtToken, "SECRET").place;
      const currentDataUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
      // setUserData({ currentDataUser });
      getProfile(currentUser);
      
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }
    // setDataloading(true)
    setDataloaded(true)
    console.log("The current User is: ", auth.currentUser);
    console.log("The current DATA User  ", userData.currentDataUser);
  };
  const getProfile = async (currentUser) => {
    console.log("get profile in App.js ======",currentUser)
    const res = await axios.get(`http://localhost:5000/api/user/profile/${currentUser._id}`)
    console.log('Loaded user profile: ', res)
    setUserProfile(res.data)
  }
  useEffect(userLogin, []);

  useEffect(() => {
    if (userProfile.name) {
      setDataloaded(true)
    }
  }, [userProfile])

  return (
    <>
      <div className="classicformpage">
​
        <Router>
          <NavBar loginCallback={userLogin} isLoggedIn={auth.isLoggedIn} />
          <Switch>
            <Route path="/profile">
              <AuthRoute
                setAuth={setAuth}
                auth={auth}
                user={auth.currentUser}
                userProfile={userProfile}

              />

            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login loginCallback={userLogin} />
            </Route>
​
            <Route exact path="/edit/:placeId">
              <EditPlace user={auth.currentUser} />
            </Route>
​
            <Route path="/show/:id">
              <ShowOnePlace
                user={auth.currentUser}
                isLoggedIn={auth.isLoggedIn}
              />
            </Route>
​
            <Route path="/edituserinfo/:id">
              <EditUserInfo
                setAuth={setAuth}
                auth={auth}
                user={auth.currentUser}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </Route>
​
            <Route path="/create">
              <Create
                user={auth.currentUser}
                isLoggedIn={auth.isLoggedIn}
              />
            </Route>
            {auth.isLoggedIn &&
              <Route exact path="/tovisit">
                <UserList auth={auth} user={userData.currentDataUser} setAuth={setAuth} />
              </Route>
            }
​
            <Route path="/signup">
              <SignUp />
            </Route>
​
            <Route path="/aboutus">
              <AboutUs />
            </Route>
          </Switch>
          <Footer />
        </Router>
​
        {/* : <Spinner animation="border" />
      } */}
      </div>
    </>
  );
}
export default App;