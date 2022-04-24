import React, { useState, useEffect } from "react";
import { MdOutlineAttachMoney } from "react-icons/md"
import { BiListCheck } from "react-icons/bi"
import { Col, Row } from "react-bootstrap"
import ServiceList from "./ServiceList/ServiceList";
import SaleList from "./SaleList/SaleList";

export default function Home() {
  const [sales, setSales] = useState([])

  useEffect(() => {
    getSales()
  }, [])

  const getSales = () => {
    const sale =
      [
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
    setSales(sale)
  }

  return (
    <Row className="d-flex justify-content-evenly p-0 m-0">
      <Col lg={4} md={6} sm={12} sx={12} className="bg-white shadow py-5 mx-1 rounded" >
        <Col className="d-flex mx-2 justify-content-start">
          <MdOutlineAttachMoney className="h2" />
          <h2>Vendas do Dia</h2>
        </Col>
        <SaleList sales={sales} setSales={setSales} />
        <Col className="mx-2">
          <h3>Total: </h3>
        </Col>
      </Col>
      <Col lg={7} md={6} sm={12} sx={12} className="bg-white shadow py-5 mx-1 rounded" >
        <Col className="d-flex mx-2 justify-content-start">
          <BiListCheck className="h2 me-1" />
          <h2>Serviços para Retirada</h2>
        </Col>
        <ServiceList />
      </Col>
    </Row>
  )
}