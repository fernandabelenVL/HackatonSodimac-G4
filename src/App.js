import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import SingleTracking from "./Components/SingleTracking";
import ProductsList from "./Components/ProductsList";
import NavBar from "./Components/NavBar";
import CategoryBar from "./Components/CategoryBar";
import SatisfactionClients from "./Components/SatisfactionClients";
import SingleOrder from "./Components/SingleOrder";

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
          </div>
        </header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/singletracking">
              <SingleTracking />
            </Route>
            <Route path="/ProductsList">
              <ProductsList />
            </Route>
            <Route path="/SatisfactionClients">
              <SatisfactionClients />
            </Route>
            <Route path="/singleorder">
              <SingleOrder />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
