import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/Create';
import NavBar from './components/NavBar';
import EditProfile from './components/EditProfile';
import ShowPage from './components/ShowPage';
import {Footer} from './components/Footer';
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";
import AuthRoute from './components/AuthRoute';
import Landing from './components/Landing';
import {AboutUs} from './components/AboutUs';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [userProfile , setUserProfile] = useState({})
  

  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    // setDataloading(true)
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);


  return(
    <>
    <div className="classicformpage">
      {/* { dataLoaded ? */}
        
        <Router>
        {/* <NavBar /> */}
          <Switch>

            <Route path="/editprofile">
              <AuthRoute
                auth={auth}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </Route>

              <Route path="/landing">
                <Landing />
              </Route>

              <Route path="/home">
                  <Home />
              </Route>

              <Route path="/login">
                <Login loginCallback={userLogin}/>
              </Route>

              <Route path="/Show/:id">
                <ShowPage/>
                
              </Route>
              <Route path="/editprofile">
                <EditProfile />
              </Route> 
              <Route path="/create">
                  <Create />
              </Route>

              <Route path="/signup">
                <Signup />
              </Route>

              <Route path="/aboutus">
                <AboutUs />
              </Route>

            </Switch>
            <Footer />
            </Router>  
            {/* <Footer /> */}
        {/* : <Spinner animation="border" />
      } */}
    </div>
    </>
  );
}

export default App;


