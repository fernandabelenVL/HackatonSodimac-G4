import React from "react";
import "./App.css";
import ProductsList from './Components/ProductsList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Tracking de despacho de productos y servicios</p>
      </header>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ProductsList">ProductsList</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        	<Route exact path='/'  />
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
