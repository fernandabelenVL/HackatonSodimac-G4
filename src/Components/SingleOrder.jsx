import React, { Component } from "react";
import SingleClientData from "./SingleClientData"
import ProductList from "./ProductsList"
import SingleTracking from "./SingleTracking"
import SatisfactionClients from "./SatisfactionClients"

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
            <SingleClientData/>
            <SingleTracking/>
            <ProductList/>
            <SatisfactionClients/> 
         </Container>
      </div>
   );
 }
} 

