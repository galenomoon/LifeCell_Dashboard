import React from "react";
import { Col, Modal, Form, Button } from "react-bootstrap";

export default function ModalComponent({ item }) {

  return (
    <>
      <Modal.Header closeButton>
        <h3>Nome do Produto/Serviço</h3>
      </Modal.Header>
      <Modal.Body className="modal-edit-product mh-50 d-flex overflow-auto">
        
        
      </Modal.Body >
      <Modal.Footer>
        <Button className={`px-5`} type="submit" onClick={e => [buy(), setModalShow(false)]}> Salvar </Button>
      </Modal.Footer >
    </>
  )
}