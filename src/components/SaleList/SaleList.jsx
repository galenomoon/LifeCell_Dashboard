import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function SaleList() {
  const [total, setTotal] = useState(0);

  const sales = [
    {
      id: 1,
      quantity: 1,
      product: "Película 3D",
      price: 15,
      method_of_payment: "Dinheiro"
    },
    {
      id: 2,
      quantity: 2,
      product: "Fone de Ouvido",
      price: 20,
      method_of_payment: "PIX"
    },
    {
      id: 3,
      quantity: 1,
      product: "Carregador Tipo C",
      price: 35,
      method_of_payment: "Crédito"
    }
  ]

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
        {sales.map(sale => (
          <Row className='d-flex' key={sale.id}>
            <Col lg={2} md={3} sm={3} xs={3} className="py-2 justify-content-center">{sale.quantity}x</Col>
            <Col lg={4} md={3} sm={3} xs={3} className="py-2 px-1"> {sale.product} </Col>
            <Col lg={2} md={2} sm={2} xs={2} className="py-2 px-1 d-flex justify-content-center"> {sale.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </Col>
            <Col lg={4} md={4} sm={4} xs={4} className="py-2 d-flex justify-content-center"> {sale.method_of_payment} </Col>
          </Row >
        ))}
      </Col>
    </Col>
  )
}

