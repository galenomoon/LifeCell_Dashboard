import React, { useState } from "react"
import { Row, Col, Modal } from "react-bootstrap"
import { RiMoneyDollarBoxFill } from "react-icons/ri"
import { MdPhoneIphone } from "react-icons/md"
import ModalComponent from "../Modal/Modal";
import "./Navbar.css"

export default function Navbar() {
  const closeModal = (closeModal) => setModalShow(closeModal)
  const [modalShow, setModalShow] = useState(false)

  return (
    <Row className="navbar text-white shadow d-flex cursor p-0 mx-0 justify-content-evenly mb-3">
      <Col className="d-flex justify-content-start">
        <Col className="d-flex justify-content-center py-2 mx-1 option-navbar transition-120ms" onClick={() => setModalShow(true)}>
          <RiMoneyDollarBoxFill className="fs-3 me-2" />
          <h4>Nova Venda</h4>
        </Col>
        <Col className="d-flex justify-content-center py-2 mx-1 option-navbar transition-120ms">
          <MdPhoneIphone className="fs-3" />
          <h4>Novo Serviço</h4>
        </Col>
      </Col>
      <Modal size='lg' className="arial" show={modalShow} onHide={() => setModalShow(false)}>
        <ModalComponent closeModal={closeModal} />
      </Modal>
    </Row>
  )
}