import React, { useState, useEffect } from "react";
import { Col, Modal, Form, Button } from "react-bootstrap";

export default function ModalComponent() {
  return (
    <>
      <Modal.Header closeButton>
        <h3>Nova Venda</h3>
      </Modal.Header>
      <Modal.Body className="modal-edit-product mh-50 d-flex overflow-auto">
        <Col className="modal-edit-product d-flex" lg={12} md={12} sm={12} xs={12} >
          <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Produto:</Form.Label>
              <Form.Control type="text" placeholder={"Nome do Produto"} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Valor:</Form.Label>
              <Form.Control type="text" placeholder={"R$00,00"} />
            </Form.Group>
          </Col>
          <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
            <Form.Label>Forma de Pagamento: </Form.Label>
            <Form.Group className="my-0 d-flex align-items-center">
              <Form.Select className="mb-3" aria-label="Default select example">
                <option> Dinheiro </option>
                <option> Débito </option>
                <option> Crédito </option>
                <option> PIX </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantidade:</Form.Label>
              <Form.Control type="number" min={1} placeholder={"Quantidade de Produtos"} />
            </Form.Group>
          </Col>
        </Col >
      </Modal.Body >
      <Modal.Footer>
        <Button className={`px-5`} type="submit"> Salvar </Button>
      </Modal.Footer >
    </>
  )
}