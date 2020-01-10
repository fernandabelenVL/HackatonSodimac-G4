import React, { Component } from "react";
import "./SingleTracking.css";

//CSS
import { Row, Col } from "react-bootstrap";

export default class SingleClientData extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      client_name: "",
      price: ""
    };
  }

  render() {
    return (
      <div className="client-data-desktop">
        <div>
          <Row>
            {/* Datos de persona que compró */}
            <Col xs={12} md={6}>
              <p className="accordion-title">Datos de Envío</p>
              <p className="bold-title">Nombre: <span className="normal-text">Nataly Riquelme</span></p>
              <p className="bold-title">Email: <span className="normal-text">nat.riquelme@gmail.com</span></p>
              <p className="bold-title"> Dirección de Despacho:<span className="normal-text">
                  <br></br>Mariano Sánchez Fontecilla 310, Santiago, Las Condes, Región
                  Metropolitana
                </span></p>
              <p className="bold-title">
                Nombre del receptor: <span className="normal-text">Nataly Riquelme</span>
              </p>
              <p className="bold-title">
                Costo de envío: <span className="normal-text">$20.990</span>
              </p>
              <p className="bold-title">
                Observaciones de envío: <span className="normal-text">Evento Laboratoria. Favor entregar en persona.</span>
              </p>
            </Col>

            {/* Datos de despacho */}
            <Col xs={12} md={6}>
              <p className="accordion-title">Información de tu orden</p>
              <p className="bold-title">Fecha de recepción:&nbsp;
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2020-01-10"
                  min="2020-01-12"
                  max="2020-12-31"
                ></input>
                <p className="text-muted">Solo puedes cambiar la fecha de entrega dos días antes de la fecha límite</p>
              </p>
              <p className="bold-title">
                Hora despacho: <span className="normal-text">9 a 22 horas</span>
              </p>
              <p className="bold-title">
                Medio de Pago: <span className="normal-text">Tarjeta bancaria</span>
              </p>
              <p className="bold-title">
                Nº de Cuotas: <span className="normal-text">1</span>
              </p>
              <p className="bold-title">
                Fecha de Pago: <span className="normal-text">28/12/2019</span>
              </p>
              <p className="bold-title">
                Total compra: <span className="normal-text">$129.990</span>
              </p>
              <p className="bold-title">
                Boleta:&nbsp;
                <a  className="normal-text" href="https://drive.google.com/file/d/1W4aIjhdHCGufua_TnfbltFjiXSZhwu69/view?usp=sharing">
                  Ver Boleta
                </a>
              </p>
            </Col>
          </Row>

          <br></br>
        </div>
      </div>
    );
  }
}
