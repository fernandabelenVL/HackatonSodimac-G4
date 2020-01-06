import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SingleTracking from "./Components/SingleTracking";
import ProductsList from './Components/ProductsList.js'
import NavBar from "./Components/NavBar";
import CategoryBar from "./Components/CategoryBar";
import Order from "./Components/Order";


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App">
            <div className="header">
              <NavBar />
              <CategoryBar />
            </div>
            <div className="Check">
              <Order />
              <Link to="/"></Link>
            </div>
          </div>
        </header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/singletracking">Single Tracking</Link>
              </li>
               <li>
              <Link to="/ProductsList">ProductsList</Link>
            </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" />
            <Route path="/singletracking">
              <SingleTracking />
            </Route>
     <Route path="/ProductsList">
            <ProductsList />
          </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}




export default App;
