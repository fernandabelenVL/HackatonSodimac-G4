import React from "react";
// import data from '../data/mock-data'

//CSS
import Table from "react-bootstrap/Table";

class ProductsList extends React.Component {
  render() {
  	return (
  	<div>
  	<b>Productos de la compra</b>
  	  <Table bordered hover className="desktop-table">
      
      
      <thead>
        <tr>
          <th>SKU</th>
          <th>Imagen</th>
          <th>Producto/Servicio</th>
          <th>Unidades</th>
          <th>Precio</th>
          <th>Más detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* SKU */}<td className="grey-bg">363261-2</td>
          {/* Imagen */}<td className="ima-box"><img className="product-ima" src="https://i.ibb.co/drgyDDs/meraki-box.png" alt="meraki-box"/></td>
          {/* Producto */}<td>Cajita Meraki</td>
          {/* Unidades */}<td>1</td>
          {/* Precio */}<td>$20.990</td>
          {/* Boleta */}<td><a href="https://www.sodimac.cl/sodimac-cl/product/363261X/combo-piscina-427x84-cm-+-bomba-530-gl" target="_blank" rel="noopener noreferrer">Ver Detalles</a></td>
        </tr>
        {/* <tr>

          <td className="grey-bg">228450-2</td>
          <td className="ima-box"><img className="product-ima" alt="Producto" src="https://sodimac.scene7.com/is/image/SodimacCL/2284502_02?$producto495$&id=IconF1&fmt=jpg&fit=constrain,1&wid=493&hei=493"/></td>
          <td>Juego de Living de Terraza Segovia 4 Personas Homy</td>
          <td>1</td>
          <td>$139.990</td>
          <td><a href="/singleorder">Ver Detalles</a></td>
          </tr>
          <tr>
          <td className="grey-bg">356753-2</td>
          <td className="ima-box"><img className="product-ima" alt="Producto" src="https://sodimac.scene7.com/is/image/SodimacCL/3567532_01?$producto495$&id=CDBnB1&fmt=jpg&fit=constrain,1&wid=493&hei=493"/></td>
          <td>Quitasol Petroleo 2x3 Mt Home Collection Garden</td>
          <td>2</td>
          <td>$99.980</td>
          <td><a href="https://www.sodimac.cl/sodimac-cl/product/3567532/Quitasol-Petroleo-2x3-Mt/3567532" target="_blank" rel="noopener noreferrer">Ver Detalles</a></td>
          </tr> */}
          </tbody>
        </Table>
        
        <section className="mobile-products">
          <div className="mobile-image-list">
            <img className="product-ima" alt="Producto" src="https://i.ibb.co/drgyDDs/meraki-box.png"/>
          </div>
          <div className="mobile-info-product producto">
                    <p class="brand">Meraki Technology</p>
                    <h3 class="product">Cajita Meraki</h3>
                    <p class="sku">Código: 310449-4</p>
          </div>
        
        </section>
      </div>
    );
  }
}

export default ProductsList;
