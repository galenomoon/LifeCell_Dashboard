import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col } from 'react-bootstrap';
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <Router>
      <Col>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Col>
    </Router>
  );
}

export default App;
