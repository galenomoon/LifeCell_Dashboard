import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col } from "react-bootstrap";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Col>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Col>
    </Router>
  );
}

export default App;
