import React, { useState, useEffect } from 'react';
import "./SingleTracking.css";

//CSS
import { Container, Row, Col } from 'react-bootstrap'


export default function SingleTracking() {

  return (
    <div>
       <Container>
         <h4>**Single Producto - Info de Despacho**</h4>
         <div>
            {/* Titulo del bloque: numero de orden */}
            <h3>Información número de orden: 123456789</h3>
            <br></br>
            
            <Row>
               {/* Datos de persona que compró */}
               <Col xs={12} md={6}>
                  <b>Datos de Envío</b>
                  <p>Nombre: <span>Nombre del cliente</span></p>
                  <p>Email: <span>correocliente@gmail.com</span></p>
                  <p>Dirección de Despacho: <span>Pedro de Valdivia 1234, Número 654, Nuñoa, Santiago de Chile</span></p>
                  <p>Nombre del receptor: <span>Carolina Herrera</span></p>
                  <p>Costo de envío: <span>$5.990</span></p>
                  <p>Observaciones de envío: <span>-----</span></p>
               </Col>
               
               {/* Datos de despacho */}
               <Col xs={12} md={6}>
                  <b>Información de tu orden</b>
                  <p>Fecha de recepción: <span>Sábado 10/01/2020</span></p>
                  <p>Hora despacho: <span>9 a 22 horas</span></p>
                  <p>Medio de Pago: <span>Tarjeta bancaria</span></p>
                  <p>Nº de Cuotas: <span>0</span></p>
                  <p>Fecha de Pago: <span>28/12/2019</span></p>
                  <p>Total compra: <span>$58.990</span></p>
               </Col>
            </Row>    
            
            <br></br>
            
            
            <Row>
               <Col>
                  <b>Productos:</b>
                  {/* Producto 1 */}
                  <div>
                     <img src={'src/assets/img/produ1.jpeg'} alt="Product"/> 
                  </div>
               </Col>
            </Row>

         </div>
       </Container>
    </div>
  );
}

