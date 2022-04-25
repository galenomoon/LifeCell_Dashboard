import React from "react";
import { Row, Col } from "react-bootstrap";

const services = [
  {
    id: 1,
    client_name: "Guilherme Galeno",
    service_description: "Frontal Completa",
    device: "Motorola",
    model: "Z2 Play",
    service_value: 250,
  },
  {
    id: 2,
    client_name: "Luana Santiago",
    service_description: "Frontal Completa",
    device: "Xiaomi",
    model: "Note 9",
    service_value: 150,
  },
  {
    id: 3,
    client_name: "Isabella Galeno",
    service_description: "Conector de Carga",
    device: "Motorola",
    model: "G4 Play",
    service_value: 90,
  }
]

export default function SaleList() {
  return (
    <Col className="box mt-2">
      <Col className='px-3'>
        <Row className='d-flex bg-info rounded'>
          <Col lg={1} md={1} sm={1} xs={1} className="fw-bold py-2 d-flex justify-content-center">OS</Col>
          <Col lg={3} md={3} sm={3} xs={3} className="fw-bold py-2">Cliente</Col>
          <Col lg={3} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-start"> Serviço </Col>
          <Col lg={1} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-center"> Aparelho </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="fw-bold py-2 px-1 d-flex justify-content-center"> Modelo </Col>
          <Col lg={1} md={2} sm={2} xs={2} className="fw-bold py-2 d-flex justify-content-center"> Preço </Col>
        </Row>
      </Col>
      <Col className='box px-3 mx-0 overflow-auto'>
        {services.map(service =>(
          <Row className='d-flex item-list cursor' key={service.id}>
            <Col lg={1} md={1} sm={1} xs={1} className="py-2 d-flex justify-content-center">{service.id}</Col>
            <Col lg={3} md={3} sm={3} xs={3} className="py-2"> {service.client_name} </Col>
            <Col lg={3} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-start ">  {service.service_description}  </Col>
            <Col lg={1} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-center">  {service.device}  </Col>
            <Col lg={2} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-center">  {service.model}   </Col>
            <Col lg={1} md={2} sm={2} xs={2} className="py-2 d-flex justify-content-center"> {service.service_value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}  </Col>
          </Row >
        ))}
      </Col>
    </Col>
  )
}

