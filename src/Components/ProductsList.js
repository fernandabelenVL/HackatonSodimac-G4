import React from 'react';
import ProductsListCSS from '../Components/ProductsList.css';


class ProductsList extends React.Component {
  

  render() {
    return (
    	<div>
	<ul className='GeneralMenu'>
		<li className='Imágen'>Imágen</li>
   		<li className='Fecha de Compra'>Fecha de Compra</li>
   		<li className='N° de Orden'>N° de Orden</li>
   		<li className='Tipo de Entrega'>Tipo de Entrega</li>
		<li className='N° Boleta / Factura'>N° Boleta / Factura</li>
   		<li className='Monto ($)'>Monto ($)</li>
   		<li className='Estado de Entrega'>Estado de Entrega</li>
   		<li className='Detalle'>Detalle</li>
	</ul>
		</div>

    	)	
    };	
}




export default ProductsList; 