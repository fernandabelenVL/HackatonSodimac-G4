import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SingleTracking from "./Components/SingleTracking";

function App() {
  return (
      <div className="App">
            <header className="App-header">
         <p>HEADER</p>
      </header>

      
      <Router>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/singletracking">Single Tracking</Link>
                  </li>
               </ul>
            </nav>

            <Switch>
               <Route exact path="/"  />
               <Route path="/singletracking">
                  <SingleTracking/>
               </Route>
            </Switch>
         </div>
      </Router>
      

   </div>
  );
}

export default App;
