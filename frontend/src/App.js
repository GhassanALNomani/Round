import React from 'react';
 import Login from './components/Login';
 import { BrowserRouter as Router, Route } from "react-router-dom";





 
function App() {
  return (
    <>
<Router>

<Route exact path="/login">
            <Login />
          </Route>

</Router>

      </>

  );
}

export default App;
