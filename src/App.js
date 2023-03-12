import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<CheckOut />}/>

          <Route path="/home" element={ <Home />}/>
          <Route path="/" element={ <Login />}/>
           
          
       </Routes>
      </div>
    </Router>
  );
}

export default App;
