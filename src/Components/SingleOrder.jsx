import React, { Component } from "react";
import SingleClientData from "./SingleClientData"
import ProductList from "./ProductsList"
import SingleTracking from "./SingleTracking"
import SatisfactionClients from "./SatisfactionClients"
import VerticalTracking from "./VerticalTracking"
import AccordionInformation from "./AccordionInformation"

//data
import data from '../data/mock-data'
import { Container } from "react-bootstrap";

//CSS
import "./SingleOrder.css"


export default class SingleOrder extends Component {
   
   constructor () {
      super();
      this.state = {
          data: data,
          orders: []
      }
  }
  
  render() {
   // const clientName = data.orders.client.name;
   
   

   return (
      <div>
         <Container>
            <div className="information-box">
               {/* Titulo del bloque: numero de orden */}
               <h4>Información número de orden:</h4>
               <b>123456789</b>
               <br></br>
            </div>
            <ProductList/>
            <SingleTracking/>
            <VerticalTracking/>
            <SingleClientData/>
            <AccordionInformation/>
         </Container>
      </div>
   );
 }
} 

