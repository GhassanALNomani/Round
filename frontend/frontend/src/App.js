import './App.css';
import SignUp from "./components/action/SignUp"
import Login from "./components/action/Login"
import Create from './components/action/Create';
import NavBar from './components/action/NavBar';
import UserProfile from "./components/pages/UserProfile"
import Home from "./components/pages/Home";
import ShowOnePlace from './components/pages/ShowOnePlace';
import AuthRoute from './components/action/AuthRoute';
import {AboutUs} from './components/pages/AboutUs';
import {Footer} from './components/pages/Footer'
import axios from "axios"
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  
  
  const [loadingData, setLoadingData] = useState(false);
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [userProfile , setUserProfile] = useState({})
  const [dataLoaded, setDataloaded] = useState(false)
  const [userData , setUserData] = useState({currentDataUser : null})

  
  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      const currentPlace = jwt_decode(jwtToken, "SECRET").place;
      const currentDataUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
      // setUserData({ currentDataUser });
      getProfile(currentUser);
     // getBook(currentBook)
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }
   // setDataloading(true)
   setDataloaded(true)
    console.log("The current User is: ", auth.currentUser);
    console.log("The current DATA User  ", userData.currentDataUser);
    
  };
  const getProfile = async (currentUser) => {
    const {data: {user}} =  await axios.get(`http://localhost:5000/api/users/profile/${currentUser._id}`)
    console.log('Loaded user profile: ', user)
    setUserProfile(user)
  } 
  
  useEffect(userLogin, []);
  useEffect(()=>{
    if(userProfile.name){
      setDataloaded(true)
    }
  },[userProfile])


  return(
    <>
    <div className="classicformpage">
      
        
        <Router> 
        <NavBar loginCallback={userLogin} isLoggedIn={auth.isLoggedIn}/>
          <Switch>

            <Route path="/profile">
              <AuthRoute
                setAuth={setAuth}
                auth={auth}
                user={auth.currentUser}
              />
            </Route>

              <Route exact path="/">
                  <Home />
              </Route>

              <Route path="/login">
                <Login loginCallback={userLogin}/>
              </Route>

              <Route path="/show/:id">
                <ShowOnePlace
                user={auth.currentUser}
                isLoggedIn={auth.isLoggedIn}
                />
              </Route>

              {/* <Route path="/profile">
                <UserProfile />
              </Route>  */}

              <Route path="/create">
                  <Create
                  user={auth.currentUser}
                  isLoggedIn={auth.isLoggedIn}
                  />
              </Route>

              <Route path="/signup">
                <SignUp />
              </Route>

              <Route path="/aboutus">
                <AboutUs />
              </Route>
            </Switch>
            <Footer />
            </Router>  
            
        {/* : <Spinner animation="border" />
      } */}
    </div>
    </>
  );
}
export default App;
