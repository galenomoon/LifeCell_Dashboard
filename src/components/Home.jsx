import React, { useState, useEffect } from "react";
import { MdOutlineAttachMoney } from "react-icons/md"
import { BiListCheck } from "react-icons/bi"
import { Col, Row, Modal } from "react-bootstrap"
import Navbar from "./Navbar/Navbar";
import ServiceList from "./ServiceList/ServiceList";
import SaleList from "./SaleList/SaleList";
import ModalComponent from "./Modal/Modal";

export default function Home() {
  const [sales, setSales] = useState([{ id: 1, quantity: 1, product: "Película 3D", price: 15, method_of_payment: "Dinheiro" }, { id: 2, quantity: 2, product: "Fone de Ouvido", price: 20, method_of_payment: "PIX" }, { id: 3, quantity: 1, product: "Carregador Tipo C", price: 35, method_of_payment: "Crédito" }])
  const [total, setTotal] = useState(0)
  const [modalShow, setModalShow] = useState(false)
  const [typeModal, setTypeModal] = useState("");

  useEffect(() => { getSales(); getTotal(sales); }, [])

  const getSales = () => setSales(sales)

  const getTotal = (sales) => {
    let total = 0
    sales.map(sale => total += sale.price * sale.quantity)
    setTotal(total)
  }
  const addSale = (sale) => {
    setSales([...sales, sale])
    getSales()
    getTotal(sales)
  }

  // const removeSale = (id) => { setSales(sales.filter(sale => sale.id !== id)) }

  return (
    <>
      <Navbar setModalShow={setModalShow} setTypeModal={setTypeModal} />
      <Row className="d-flex justify-content-evenly p-0 m-0">
        <Col lg={4} md={5} sm={12} sx={12} className="bg-white shadow py-5 m-1 rounded" >
          <Col className="d-flex align-items-center justify-content-start mx-2 py-1 h2">
            <MdOutlineAttachMoney /> Vendas do Dia
          </Col>
          <SaleList sales={sales} setSales={setSales} addSale={addSale} />
          <hr />
          <Col className="d-flex align-items-center justify-content-center h3">
            Total: {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </Col>
        </Col>
        <Col lg={7} md={6} sm={12} sx={12} className="bg-white shadow py-5 m-1 rounded" >
          <Col className="d-flex align-items-center justify-content-start mx-2 py-1 h2">
            <BiListCheck /> Serviços para Retirada
          </Col>
          <ServiceList />
        </Col>
      </Row>
      <Modal size='lg' className="arial" show={modalShow} onHide={() => setModalShow(false)}>
        <ModalComponent setModalShow={setModalShow} typeModal={typeModal} addSale={addSale} sales={sales} />
      </Modal>
    </>
  )
}