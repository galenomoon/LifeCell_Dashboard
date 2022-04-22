import React from "react";
import { Col, Row } from "react-bootstrap"
import { BiListCheck } from "react-icons/bi"
import { MdOutlineAttachMoney } from "react-icons/md"
import SaleList from "./SaleList/SaleList";
import ServiceList from "./ServiceList/ServiceList";

export default function Home() {
  return (
    <Row className="d-flex justify-content-evenly p-0 m-0">
      <Col lg={5} md={6} sm={12} sx={12} className="bg-white shadow py-5 mx-1 rounded" >
        <Col className="d-flex mx-2 justify-content-start">
          <MdOutlineAttachMoney className="h2" />
          <h2>Vendas do Dia</h2>
        </Col>
        <SaleList/>
      </Col>
      <Col lg={6} md={6} sm={12} sx={12} className="bg-white shadow py-5 mx-1 rounded" >
        <Col className="d-flex mx-2 justify-content-start">
          <BiListCheck className="h2 me-1" />
          <h2>Serviços para Retirada</h2>
        </Col>
        <ServiceList/>
      </Col>
    </Row>
  )
}