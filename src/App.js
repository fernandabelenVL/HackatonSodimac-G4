import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import CategoryBar from "./Components/CategoryBar";
import Order from "./Components/Order";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
        <CategoryBar />
      </div>
      <div className="Check">
        <Order />
      </div>
    </div>
  );
}

export default App;
