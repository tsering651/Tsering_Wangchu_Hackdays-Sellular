import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Header />}/>

          <Route path="/login" element={ <Login />}/>
          <Route path="/" element={ <Home />}/>
           
          
       </Routes>
      </div>
    </Router>
  );
}

export default App;
