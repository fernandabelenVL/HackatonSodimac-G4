import React from 'react';
import '../Components/ProductsList.css';
import data from '../data/mock-data'



class ProductsList extends React.Component {
  render() {
  	return (

 <table>
  <tr>
    <th>Imágen</th>
    <th>Fecha de Compra</th>
    <th>N° de Orden</th>
    <th>Tipo de Entrega</th>
    <th>N° Boleta / Factura</th>
    <th>Monto ($)</th>
    <th>Estado de Entrega</th>
    <th>Detalle</th>
  </tr>
	{
	        data.products.map((product) => {
        	return (
        	  <tr>
    <td>{product.image}</td>
    <td>{product.sell_date}</td>
    <td>{product.order_number}</td>
     <td>{product.delivery_type}</td>
    <td>{product.invoce_number}</td>
    <td>{product.price}</td>
    <td>{product.status}</td>
    <td>{product.details} <a href="">+</a> </td>



  </tr>

        	)
        })	
	}
</table> 		

  		
 		
  	)
  }
}




export default ProductsList; 