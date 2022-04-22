import React from "react";
import { Col, Row } from "react-bootstrap"

export default function Home() {
  return (
    <Row className="d-flex justify-content-evenly ">
      <Col lg={5} md={6} sm={12} sx={12} className="bg-white shadow" >
        sold
      </Col>
      <Col lg={6} md={6} sm={12} sx={12} className="bg-white shadow" >
        sold
      </Col>
    </Row>
  )
}