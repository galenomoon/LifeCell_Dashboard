import React from "react";
import { Row, Col } from "react-bootstrap";
const valor = 150

export default function SaleList() {
  return (
    <Col className="box mt-2">
      <Col className='px-3'>
        <Row className='d-flex bg-light'>
          <Col lg={1} md={1} sm={1} xs={1} className="fw-bold py-2 d-flex justify-content-center">OS</Col>
          <Col lg={3} md={3} sm={3} xs={3} className="fw-bold py-2">Cliente</Col>
          <Col lg={2} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-start"> Serviço </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-center"> Aparelho </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-center"> Modelo </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="fw-bold py-2 d-flex justify-content-center"> Preço </Col>
        </Row>
      </Col>
      <Col className='box px-3 mx-0 overflow-auto'>
        <Row className='d-flex'>
          <Col lg={1} md={1} sm={1} xs={1} className="py-2 d-flex justify-content-center">1948</Col>
          <Col lg={3} md={3} sm={3} xs={3} className="py-2">Márcia</Col>
          <Col lg={2} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-start "> Frontal </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-center"> Motorola </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-center"> XT-1763  </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="py-2 d-flex justify-content-center"> {valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}  </Col>
        </Row >
      </Col>
    </Col>
  )
}

