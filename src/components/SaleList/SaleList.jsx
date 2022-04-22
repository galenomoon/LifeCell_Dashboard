import React from "react";
import { Row, Col } from "react-bootstrap";
const valor = 15

export default function SaleList() {
  return (
    <Col className="box mt-2">
      <Col className='px-3'>
        <Row className='d-flex bg-light'>
          <Col lg={2} md={3} sm={3} xs={3} className="fw-bold py-2 justify-content-center">Qtd</Col>
          <Col lg={4} md={3} sm={3} xs={3} className="fw-bold py-2 px-1"> Produto </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-center"> Preço </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="fw-bold py-2 d-flex justify-content-center"> Pagamento </Col>
        </Row>
      </Col>
      <Col className='box px-3 mx-0 overflow-auto'>
        <Row className='d-flex'>
          <Col lg={2} md={3} sm={3} xs={3} className="py-2 justify-content-center">1x</Col>
          <Col lg={4} md={3} sm={3} xs={3} className="py-2 px-1"> Película 3D </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-center"> {valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="py-2 d-flex justify-content-center"> PIX </Col>
        </Row >
      </Col>
    </Col>
  )
}

