import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/Create';

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
      </Switch>
    </Router>
    </div>
  );
}

export default App;


