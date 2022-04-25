import React from "react"
import { Row, Col } from "react-bootstrap"
import { RiMoneyDollarBoxFill } from "react-icons/ri"
import { MdPhoneIphone } from "react-icons/md"
import "./Navbar.css"

export default function Navbar({ setModalShow, setTypeModal }) {
  return (
    <Row className="navbar text-white shadow d-flex cursor p-0 mx-0 justify-content-evenly mb-3">
      <Col className="d-flex justify-content-start">
        <Col className="d-flex justify-content-center py-2 mx-1 option-navbar transition-120ms" onClick={() => [setModalShow(true), setTypeModal("SALE")]}>
          <RiMoneyDollarBoxFill className="fs-3 me-2" />
          <h4>Nova Venda</h4>
        </Col>
        <Col className="d-flex justify-content-center py-2 mx-1 option-navbar transition-120ms"  onClick={() => [setModalShow(true), setTypeModal("SERVICE")]}>
          <MdPhoneIphone className="fs-3" />
          <h4>Novo Serviço</h4>
        </Col>
      </Col>
 
    </Row>
  )
}