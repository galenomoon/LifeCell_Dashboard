// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Col } from 'react-bootstrap'
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <Col className="p-0 m-0">
      <Home />
    </Col>
  );
}

export default App;
