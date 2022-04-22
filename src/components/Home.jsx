import React from "react";
import { Col, Row } from "react-bootstrap"
import { BiListCheck } from "react-icons/bi"
import { MdOutlineAttachMoney } from "react-icons/md"

export default function Home() {
  return (
    <Row className="d-flex justify-content-evenly">
      <Col lg={5} md={6} sm={12} sx={12} className="d-flex bg-white shadow p-5 rounded" >
        <Col className="d-flex justify-content-start">
          <MdOutlineAttachMoney className="h2" />
          <h2>Vendas do Dia</h2>
        </Col>
      </Col>
      <Col lg={6} md={6} sm={12} sx={12} className="d-flex bg-white shadow p-5 rounded" >
        <Col className="d-flex justify-content-start">
          <BiListCheck className="h2 me-1" />
          <h2>Serviços para Retirada</h2>
        </Col>
      </Col>
    </Row>
  )
}