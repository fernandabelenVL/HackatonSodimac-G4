import React, { Component } from "react";
import SingleOrder from "./SingleOrder";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="containerform">
        <section className="formAll">
          <div className="FormOrder">
            <div className="row">
              <div className="tittle-header">
                <h1 className="tittle">Seguimiento de tu compra</h1>
                <p>
                  Para mayor información acerca de tu orden debes iniciar sesión
                  o registrarte
                </p>
                <Form ClassName="FormOne">
                  <Form.Group controlId="formBasicEmail">
                    <h4>Consulta el estado de tu compra</h4>
                    <p>
                      Ingresa el número de orden de tu compra online o de tienda
                    </p>
                    <Form.Control
                      id="form-controlOne"
                      type="text"
                      placeholder=" Ej:12345678901"
                      required
                      minlength="11"
                      maxlength="11"
                      size="11"
                    />
                    <Form.Text className="text-muted">
                      Si no conoces tu número de orden, solicítalo al 600 600
                      4020 a nuestros ejecutivos Sodimac.
                    </Form.Text>
                  </Form.Group>

                  <Link to="/singleorder">
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
            </div>
          </div>

          <div ClassName="formlogin">
            <Form>
              <h4>Accede para ver el detalle completo de tu compra </h4>
              <p>Inicia sesión como usuario persona</p>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu e-mail"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Clave </Form.Label>
                <Form.Control type="password" placeholder="******" required />
              </Form.Group>
              <Form.Text className="text-muted">
                <span class="links">
                  <a href="#">Olvidaste tu contraseña ?</a>
                </span>
              </Form.Text>
              <button type="button" class="btn btn-outline-danger">
                {" "}
                Regístrate
              </button>

              <Button variant="danger" type="submit">
                Ingresar
              </Button>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
