//CSS
import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import './Evaluations.css';

class SatisfactionClients extends Component {
  render() {
    return (
    
      <section className="evaluation-box">
          <h4>
            ¿Como evaluaría su satisfacción respecto al servicio entregado?
          </h4>

          <Form.Group controlId="formBasic">
            <Form.Label>Envío</Form.Label>
            <form className="stars">

              <input className="star star-5" id="star-5" type="radio" name="star"/>
              <label className="star star-5" htmlFor="star-5"></label>
              <input className="star star-4" id="star-4" type="radio" name="star"/>
              <label className="star star-4" htmlFor="star-4"></label>
              <input className="star star-3" id="star-3" type="radio" name="star"/>
              <label className="star star-3" htmlFor="star-3"></label>
              <input className="star star-2" id="star-2" type="radio" name="star"/>
              <label className="star star-2" htmlFor="star-2"></label>
              <input className="star star-1" id="star-1" type="radio" name="star"/>
              <label className="star star-1" htmlFor="star-1"></label>
             </form>

          </Form.Group>

          <Form.Group controlId="formBasic1">
            <Form.Label>Servicio al Cliente</Form.Label>

            <form className="stars1" action="">
              <input className="star star-5" id="star-10" type="radio" name="star"/>
              <label className="star star-5" htmlFor="star-10"></label>
              <input className="star star-4" id="star-9" type="radio" name="star"/>
              <label className="star star-4" htmlFor="star-9"></label>
              <input className="star star-3" id="star-8" type="radio" name="star"/>
              <label className="star star-3" htmlFor="star-8"></label>
              <input className="star star-2" id="star-7" type="radio" name="star"/>
              <label className="star star-2" htmlFor="star-7"></label>
              <input className="star star-1" id="star-6" type="radio" name="star"/>
              <label className="star star-1" htmlFor="star-6"></label>
            </form>

          </Form.Group>

          <Form.Group controlId="formBasics2">
            <Form.Label>Producto</Form.Label>

            <form className="stars2">
                <input className="star star-5" id="star-15" type="radio" name="star"/>
                <label className="star star-5" htmlFor="star-15"></label>
                <input className="star star-4" id="star-14" type="radio" name="star"/>
                <label className="star star-4" htmlFor="star-14"></label>
                <input className="star star-3" id="star-13" type="radio" name="star"/>
                <label className="star star-3" htmlFor="star-13"></label>
                <input className="star star-2" id="star-12" type="radio" name="star"/>
                <label className="star star-2" htmlFor="star-12"></label>
                <input className="star star-1" id="star-11" type="radio" name="star"/>
                <label className="star star-1" htmlFor="star-11"></label>
            </form>
            </Form.Group>


          <Form.Group controlId="exampleForm.ControlTextarea1" className="section-comment">
            <Form.Label>Muchas gracias. ¿Le gustaría agregar algo?</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
      </section>
    
    );
  }
}

export default SatisfactionClients;

