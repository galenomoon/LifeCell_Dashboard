import React from "react"
import { Row, Col } from "react-bootstrap"
import { RiMoneyDollarBoxFill } from "react-icons/ri"
import { MdPhoneIphone } from "react-icons/md"
import "./Navbar.css"

export default function Navbar() {
  return (
    <Row className="navbar text-white shadow d-flex cursor p-0 justify-content-evenly mb-3">
      <Col className="d-flex justify-content-start">
        <Col className="d-flex justify-content-center p-2 mx-1 option-navbar transition-120ms">
          <RiMoneyDollarBoxFill className="fs-3 me-2" />
          <h4>Nova Venda</h4>
        </Col>
        <Col className="d-flex justify-content-center p-2  mx-1 option-navbar transition-120ms">
          <MdPhoneIphone className="fs-3" />
          <h4>Novo Serviço</h4>
        </Col>
      </Col>
    </Row>
  )
}