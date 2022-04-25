import React, { useState, useEffect } from "react";
import { Col, Modal, Form, Button } from "react-bootstrap";

export default function ModalComponent({ addSale, sales, setModalShow, typeModal }) {
  //GLOBAL STATES
  const [page, setPage] = useState();
  //SALE STATES
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [methodPayment, setMethodPayment] = useState("");
  //SERVICES STATES
  const [clientName, setClientName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [device, setDevice] = useState("");
  const [serviceValue, setServiceValue] = useState("");

  useEffect(() => {
    switch (typeModal) {
      case "SALE":
        setPage(newSaleModal());
        break;
      case "SERVICE":
        setPage(newServiceModal());
        break;
      default:
        <></>
        break;
    }
  }, [])

  const newSale = () => {
    addSale({
      id: sales.length + 1,
      product: name,
      price: parseInt(price),
      quantity: quantity,
      method_of_payment: methodPayment
    })
  }

  const newService = () => {
    addSale({
      id: sales.length + 1,
      client_name: "Guilherme Galeno",
      service_description: "Frontal Completa",
      device: "Motorola",
      model: "Z2 Play",
      service_value: parseInt(250),
    })
  }

  const newServiceModal = () => (
    <>
      <Modal.Header closeButton>
        <h3>Novo Serviço</h3>
      </Modal.Header>
      <Modal.Body className="modal-edit-product mh-50 d-flex overflow-auto">
        <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Produto:</Form.Label>
            <Form.Control type="text" value={name} placeholder={"Nome do Produto"} onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valor:</Form.Label>
            <Form.Control type="text" value={price} placeholder={"R$00,00"} onChange={e => setPrice(e.target.value)} />
          </Form.Group>
        </Col>
        <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
          <Form.Label>Forma de Pagamento: </Form.Label>
          <Form.Group className="my-0 d-flex align-items-center">
            <Form.Select className="mb-3" value={methodPayment} onChange={e => setMethodPayment(e.target.value)} aria-label="Default select example">
              <option> Dinheiro </option>
              <option> Débito </option>
              <option> Crédito </option>
              <option> PIX </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control type="number" onChange={e => setQuantity(e.target.value)} min={1} placeholder={"Quantidade de Produtos"} />
          </Form.Group>
        </Col>
      </Modal.Body >
      <Modal.Footer>
        <Button className={`px-5`} type="submit" onClick={e => [newSale(), setModalShow(false)]}> Salvar </Button>
      </Modal.Footer >
    </>
  )

  const newSaleModal = () => (
    <>
      <Modal.Header closeButton>
        <h3>Nova Venda</h3>
      </Modal.Header>
      <Modal.Body className="modal-edit-product mh-50 d-flex overflow-auto">
        <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Produto:</Form.Label>
            <Form.Control type="text" value={name} placeholder={"Nome do Produto"} onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valor:</Form.Label>
            <Form.Control type="text" value={price} placeholder={"R$00,00"} onChange={e => setPrice(e.target.value)} />
          </Form.Group>
        </Col>
        <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
          <Form.Label>Forma de Pagamento: </Form.Label>
          <Form.Group className="my-0 d-flex align-items-center">
            <Form.Select className="mb-3" value={methodPayment} onChange={e => setMethodPayment(e.target.value)} aria-label="Default select example">
              <option> Dinheiro </option>
              <option> Débito </option>
              <option> Crédito </option>
              <option> PIX </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control type="number" onChange={e => setQuantity(e.target.value)} min={1} placeholder={"Quantidade de Produtos"} />
          </Form.Group>
        </Col>
      </Modal.Body >
      <Modal.Footer>
        <Button className={`px-5`} type="submit" onClick={e => [newService(), setModalShow(false)]}> Salvar </Button>
      </Modal.Footer >
    </>
  )
  return (page)
}