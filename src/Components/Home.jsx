import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <section className="">
        <div className="">
          <h1>Seguimiento de tu compra</h1>
          <p>
            Seguimiento de tu compra Para mayor información acerca de tu orden
            debes iniciar sesión o registrarte
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <h4>Consulta el estado de tu compra</h4>
              <p>Ingresa el número de orden de tu compra online o de tienda</p>
              <Form.Label>Ingresa Nº Orden:</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234567890"
                required
                minlength="4"
                maxlength="8"
                size="10"
              />
              <Form.Text className="text-muted">
                Si no conoces tu número de orden, solicítalo al 600 600 4020 a
                nuestros ejecutivos Sodimac.
              </Form.Text>
            </Form.Group>

            <Link to="">
              <Button className="btn-order" variant="danger">
                {" "}
                Consultar estado de orden{" "}
              </Button>
            </Link>
          </Form>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1"></Form.Group>
          </Form>
        </div>
      </section>
    );
  }
}

export default Home;
