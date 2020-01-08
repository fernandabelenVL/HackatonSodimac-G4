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
               <section className='formAll'>
                  <div className='tittle-header'>
                     <h1 className='tittle'>Seguimiento de tu compra</h1>
                     <p className='text-P'>
                        Para mayor información acerca de tu orden debes iniciar
                        sesión o registrarte
                     </p>
                  </div>
                  <Row>
                     <Col xs={12} md={6}>
                        <Form ClassName='number-order'>
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
                                 minlength='11'
                                 maxlength='11'
                                 size='11'
                              />
                              <Form.Text className='text-muted'>
                                 Si no conoces tu número de orden, solicítalo al
                                 600 600 4020 a nuestros ejecutivos Sodimac.
                              </Form.Text>
                           </Form.Group>
                           <br />
                           <br />

                           <Link to='/singleorder'>
                              <Button className='btn-order' variant='danger'>
                                 {" "}
                                 Consultar estado de orden{" "}
                              </Button>
                           </Link>
                        </Form>
                     </Col>
                     <Col xs={12} md={5}>
                        <Form>
                           <h4 id='title-one'>
                              Accede para ver el detalle completo de tu compra{" "}
                           </h4>
                           <p>Inicia sesión como usuario persona</p>
                           <Form.Group controlId='formBasicEmail'>
                              <Form.Control
                                 type='email'
                                 placeholder='Ingresa tu e-mail'
                                 required
                              />
                           </Form.Group>
                           <Form.Group controlId='formBasicPassword'>
                              <Form.Control
                                 type='password'
                                 placeholder='******'
                                 required
                              />
                           </Form.Group>
                           <Form.Text className='text-muted'>
                              <span class='links'>
                                 <a href='/'>Olvidaste tu contraseña ?</a>
                              </span>
                           </Form.Text>
                           <div ClassName='buttonsinform'>
                              <button
                                 type='button'
                                 class='btn btn-outline-danger'
                              >
                                 {" "}
                                 Regístrate
                              </button>

                              <button type='button' class='btn btn-danger'>
                                 Ingresar
                              </button>
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
