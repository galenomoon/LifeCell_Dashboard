import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" exact element={<Home/>} />
     </Routes>
    </Router>
  );
}

export default App;
