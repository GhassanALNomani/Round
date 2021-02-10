import './App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'






function App() {
  return (
    <div className="classicformpage">
      <Router>
        <Switch>
          <Route exact path="/login">
                <Login />
          </Route>
          <Route path="/signup">
                <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;