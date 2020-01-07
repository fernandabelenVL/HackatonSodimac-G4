//CSS
import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";

class SatisfactionClients extends Component {
  render() {
    return (
      <section className="stars">
        <Form>
          <h4>
            ¿Como evaluaría su satisfacción respecto al servicio entregado?
          </h4>
          <Form.Group controlId="formBasic">
            <Form.Label>Envío</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasic1">
            <Form.Label>Servicio al Cliente</Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasics2">
            <Form.Label>Producto</Form.Label>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Muchas gracias. ¿Le gustaría agregar algo?</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
    );
  }
}

export default SatisfactionClients;
