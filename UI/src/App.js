import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
// import Navbar from "./components/navbar";
// import Home from "./components/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route> */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
