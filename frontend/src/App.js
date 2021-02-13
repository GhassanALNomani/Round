import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/Create';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ShowPage from './components/ShowPage';
import {Footer} from './components/Footer'
import {AboutUs} from './components/AboutUs';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="classicformpage">
    <Router>
      <Switch>
      <Route path="/home">
                <Home />
              </Route>

      <Route path="/signup">
                <Signup />
              </Route>

       <Route path="/login">
                <Login />
              </Route>

              <Route path="/create">
                <Create />
              </Route>

              <Route path="/navbar">
                <NavBar />
{/*                 {...props} auth={auth} loginCallback={userLogin}
 */}              </Route>

                   <Route path="/">
                <Landing />
              </Route>

              <Route path="/Show/:id">
                <ShowPage/>
              </Route>

              <Route path="/aboutus">
                <AboutUs />
              </Route>
            
             {/* <Footer /> */}
        {/* : <Spinner animation="border" />
      } */}

      </Switch>
    </Router>
    </div>
  );
}

export default App;


