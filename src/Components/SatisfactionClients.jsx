//CSS
import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import './Evaluations.css';

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
            <form className="stars" action="">

              <input className="star star-5" id="star-5" type="radio" name="star"/>
              <label className="star star-5" for="star-5"></label>
              <input className="star star-4" id="star-4" type="radio" name="star"/>
              <label className="star star-4" for="star-4"></label>
              <input className="star star-3" id="star-3" type="radio" name="star"/>
              <label className="star star-3" for="star-3"></label>
              <input className="star star-2" id="star-2" type="radio" name="star"/>
              <label className="star star-2" for="star-2"></label>
              <input className="star star-1" id="star-1" type="radio" name="star"/>
              <label className="star star-1" for="star-1"></label>
             </form>

          </Form.Group>

          <Form.Group controlId="formBasic1">
            <Form.Label>Servicio al Cliente</Form.Label>

            <form className="stars1" action="">
              <input className="star star-5" id="star-10" type="radio" name="star"/>
              <label className="star star-5" for="star-10"></label>
              <input className="star star-4" id="star-9" type="radio" name="star"/>
              <label className="star star-4" for="star-9"></label>
              <input className="star star-3" id="star-8" type="radio" name="star"/>
              <label className="star star-3" for="star-8"></label>
              <input className="star star-2" id="star-7" type="radio" name="star"/>
              <label className="star star-2" for="star-7"></label>
              <input className="star star-1" id="star-6" type="radio" name="star"/>
              <label className="star star-1" for="star-6"></label>
            </form>

          </Form.Group>

          <Form.Group controlId="formBasics2">
            <Form.Label>Producto</Form.Label>

            <form className="stars2" action="">
                <input className="star star-5" id="star-15" type="radio" name="star"/>
                <label className="star star-5" for="star-15"></label>
                <input className="star star-4" id="star-14" type="radio" name="star"/>
                <label className="star star-4" for="star-14"></label>
                <input className="star star-3" id="star-13" type="radio" name="star"/>
                <label className="star star-3" for="star-13"></label>
                <input className="star star-2" id="star-12" type="radio" name="star"/>
                <label className="star star-2" for="star-12"></label>
                <input className="star star-1" id="star-11" type="radio" name="star"/>
                <label className="star star-1" for="star-11"></label>
            </form>
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

