import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';

import ShowPage from './components/ShowPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="classicformpage">
    <Router>
      <Switch>
      <Route path="/landing">
                <Landing />
              </Route>

              <Route path="/login">
                <Login />
              </Route>


      <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/show">
                <ShowPage />
              </Route>

      </Switch>
    </Router>
    </div>
  );
}
export default App;