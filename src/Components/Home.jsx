import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

class Home extends Component {
   render() {
      return (
         <div>
            <Container>
               <section className='login-panel'>
                  <div className='title'>
                     <b>Seguimiento de tu compra</b>
                     <p>
                        Para mayor información acerca de tu orden debes iniciar
                        sesión o registrarte
                     </p>
                  </div>

                  <Row>
                     <Col xs={12} md={6} ms={6}>
                        <Form className='search-form'>
                           <Form.Group controlId='formBasic'>
                              <h4 id='title-one'>
                                 Consulta el estado de tu compra
                              </h4>
                              <p>
                                 Ingresa el número de orden de tu compra online
                                 o de tienda
                              </p>
                              <Form.Control
                                 id='form-controlOne'
                                 type='text'
                                 placeholder=' Ej:12345678901'
                                 required
                                 minLength='11'
                                 maxLength='11'
                                 size='11'
                              />
                              <Form.Text className='text-muted'>
                                 Si no conoces tu número de orden, solicítalo al
                                 600 600 4020 a nuestros ejecutivos Sodimac.
                              </Form.Text>
                           </Form.Group>

                           <Link to='/singleorder'>
                              <Button className='btn btn-red'>
                                 Consultar estado de orden
                              </Button>
                           </Link>
                        </Form>
                     </Col>
                     <Col xs={12} md={6}>
                        <Form className='login-form'>
                           <div className='header-login-form'>
                              <b>
                                 Accede para ver el detalle completo de tu compra
                              </b><br/>
                              <p><a
                                 href='/sodimac-cl/myaccount/login?companyFlag=true&amp;successUrl=/myaccount/orderList'
                              >
                                 Iniciar sesión como empresa
                              </a></p>
                           </div>
                           <div className="login-cont">
                           <b>Inicia sesión como usuario persona</b>
                           <div className="login-input">
                           
                           <Form.Group controlId='formBasicEmail'>
                              <p>Email</p>
                              <Form.Control
                                 type='email'
                                 placeholder='Ingresa tu e-mail'
                                 required
                              />
                           </Form.Group>
                           <Form.Group controlId='formBasicPassword'>
                              <p>Contraseña</p>
                              <Form.Control
                                 type='password'
                                 placeholder='******'
                                 required
                              />
                           </Form.Group>
                           <Form.Text className='text-muted forgot-pass' >
                                 <a href='/'>Olvidaste tu contraseña ?</a>
                           </Form.Text>
                           <div className='buttonsinform'>
                              <button type='button'className='btn btn-white'>
                                 Regístrate
                              </button>

                              <button type='button' className='btn btn-red'>
                                 Ingresar
                              </button>
                           </div>                           


                           </div>
                           
                           
                        </div>

                        </Form>
                     </Col>
                  </Row>
               </section>
            </Container>
         </div>
      );
   }
}

export default Home;
