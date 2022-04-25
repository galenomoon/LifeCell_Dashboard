import React, { useState } from "react";
import { Col, Modal, Form, Button } from "react-bootstrap";

export default function ModalComponent({ addSale, addService, sales, typeModal }) {
  //SALE STATES
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [methodPayment, setMethodPayment] = useState("");
  //SERVICES STATES
  const [clientName, setClientName] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [device, setDevice] = useState("");
  const [serviceValue, setServiceValue] = useState("");

  const newSale = () => addSale({
    id: sales.length + 1,
    product: name,
    price: parseInt(price),
    quantity: quantity,
    method_of_payment: methodPayment
  })

  const newService = () => addSale({
    id: sales.length + 1,
    client_name: "Guilherme Galeno",
    service_title: "Frontal Completa",
    service_description: "A tela está com o touch falhando e uma mancha preta na parte superior direita",
    device: "Motorola",
    model: "Z2 Play",
    service_value: parseInt(250),
  })

  return (
    <>
      <Modal.Header closeButton>
        {typeModal === "SALE" ? <h3>Nova Venda</h3> : <h3>Novo Serviço</h3>}
      </Modal.Header>
      {typeModal === "SALE" ?
        //============================== SALE ============================== 
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
        : //============================== SERVICE ============================== 
        <Modal.Body className="modal-edit-product mh-50 d-flex overflow-auto">
          <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Cliente:</Form.Label>
              <Form.Control type="text" value={clientName} placeholder={"Digite o nome do Cliente"} onChange={e => setClientName(e.target.value)} />
            </Form.Group>
            <Col className="d-flex justify-content-between mb-3 align-items-center ">
              <Col lg={5} md={6} sm={12} xs={12} >
                <Form.Label>Marca do Aparelho: </Form.Label>
                <Form.Select value={methodPayment} onChange={e => setMethodPayment(e.target.value)} aria-label="Default select example">
                  <option> Apple </option>
                  <option> Motorola </option>
                  <option> Samsung </option>
                  <option> Xiaomi </option>
                  <option> LG </option>
                </Form.Select>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Form.Label>Modelo do Aparelho:</Form.Label>
                <Form.Control type="text" onChange={e => setQuantity(e.target.value)} min={1} placeholder={"Ex: A20s, XT-2049, iPhone 5c"} />
              </Col>
            </Col>
            <Form.Group className="mb-3">
              <Form.Label>Valor do Serviço:</Form.Label>
              <Form.Control type="number" value={price} placeholder={"R$00,00"} onChange={e => setPrice(e.target.value)} />
            </Form.Group>

          </Col>
          <Col className="p-4" lg={6} md={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Serviço:</Form.Label>
              <Form.Control type="text" value={serviceTitle} placeholder={"Ex: Frontal Completa"} onChange={e => setServiceTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrição de Serviço:</Form.Label>
              <Form.Control type="text" as="textarea" rows="5" value={serviceDescription} placeholder={"Ex: Touch não funciona e há uma mancha preta ao lado esquerdo, *digital chegou sem funcionar"} onChange={e => setServiceDescription(e.target.value)} />
            </Form.Group>

          </Col>
        </Modal.Body >
      }
      <Modal.Footer>
        {typeModal === "SALE" ? <Button className={`px-5`} type="submit" onClick={e => newSale()}> Salvar </Button> : <Button className={`px-5`} type="submit" onClick={e => [newService(), console.log("SERVICE")]}> Salvar </Button>}
      </Modal.Footer >
    </>
  )
}