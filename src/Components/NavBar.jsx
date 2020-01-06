import React, { Component } from "react";
import "./navbar.css";
import "../App.css";
import user from "../images/user.svg";
import gps from "../images/gps.svg";
import shopping from "../images/shoppingcart.svg";

class NavBar extends Component {
  render() {
    return (
      <section className="main-header">
        <div className="brand-section">
          <p className="navbar">
            <img
              src="https://i.ibb.co/s52v14w/logosodimac.png"
              alt="logosodimac"
              border="0"
            />
            <span className="p-15"></span>
            <input
              className="search-box"
              placeholder="¿Qué estás buscando?"
              name="Ntt"
            ></input>
            <div className="right-section">
              <img className="gps-icon" src={gps} alt="location"></img>
              CERRILLOS
              <span className="p-20"></span>
              <button type="button" className="counter">
                1
              </button>
              <img
                className="shopping-icon"
                src={shopping}
                alt="shopping cart"
              ></img>
              <span className="p-20"></span>
              <img className="user-icon" src={user} alt="user"></img>
              Mi cuenta
            </div>
          </p>
          <div className="brands-bar">
            <a
              className="brands left-side bold-text font-size-11"
              title="Sodimac Homecenter"
              href="https://www.sodimac.cl/sodimac-cl/"
            >
              Homecenter
            </a>{" "}
            |{" "}
            <a
              className="brands bold-text font-size-11"
              title="Sodimac Constructor"
              href="https://www.sodimac.cl/sodimac-cl/content/a1760033/Mundo-Constructor/"
            >
              Constructor
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
