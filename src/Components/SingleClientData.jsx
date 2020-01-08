import React, { Component } from "react";
import "./SingleTracking.css";

//CSS
import { Row, Col } from "react-bootstrap";

export default class SingleClientData extends Component {
   constructor (){
      super();
      this.state = {
          orders: [],
          client_name: "",
          price: ""
      }
  }

  render(){
   return (
      <div>
          <div>
            {/* Titulo del bloque: numero de orden */}
            <h3>Información número de orden: 123456789</h3>
            <br></br>
   
            <Row>
              {/* Datos de persona que compró */}
              <Col xs={12} md={6}>
                <b>Datos de Envío</b>
                <p>
                  Nombre: <span>Carolina Medina</span>
                </p>
                <p>
                  Email: <span>correocliente@gmail.com</span>
                </p>
                <p>
                  Dirección de Despacho:{" "}
                  <span>
                    Pedro de Valdivia 1234, Número 654, Nuñoa, Santiago de Chile
                  </span>
                </p>
                <p>
                  Nombre del receptor: <span>Carolina Herrera</span>
                </p>
                <p>
                  Costo de envío: <span>$10.990</span>
                </p>
                <p>
                  Observaciones de envío: <span>-----</span>
                </p>
              </Col>
   
              {/* Datos de despacho */}
              <Col xs={12} md={6}>
                <b>Información de tu orden</b>
                <p>
                  Fecha de recepción: <span>Sábado 10/01/2020</span>
                </p>
                <p>
                  Hora despacho: <span>9 a 22 horas</span>
                </p>
                <p>
                  Medio de Pago: <span>Tarjeta bancaria</span>
                </p>
                <p>
                  Nº de Cuotas: <span>6</span>
                </p>
                <p>
                  Fecha de Pago: <span>28/12/2019</span>
                </p>
                <p>
                  Total compra: <span>$369.960</span>
                </p>
                <p>
                  Boleta: <span>Ver Boleta</span>
                </p>

              </Col>
            </Row>
   
            <br></br>
   
          </div>
      </div>
     )}}

