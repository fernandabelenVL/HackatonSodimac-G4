import React, { Component } from "react";
import "./order.css";

class Order extends Component {
  render() {
    return (
      <section className="">
        <div className="">
          <h1>Seguimiento de tu compra</h1>
          <p>
            Seguimiento de tu compra Para mayor información acerca de tu orden
            debes iniciar sesión o registrarte
          </p>
          <form action="">
            <h4>Consulta el estado de tu compra</h4>
            <p>Ingresa el número de orden de tu compra online o de tienda</p>
            <input
              label="Ingresa Nº Orden:"
              type="text"
              id="name"
              name="name"
              required
              minlength="4"
              maxlength="8"
              size="10"
            ></input>
          </form>
        </div>
      </section>
    );
  }
}

export default Order;
