import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col, Row, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar"
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Row className="p-0 m-0 w-100 justify-content-center" >
            <Navbar />
          </Row>
          <Col>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
