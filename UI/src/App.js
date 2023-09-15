// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WishlistComponent from "./components/WishlistComponent";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import ProductListPage from "./components/ProductList";
import Recommended from "./Recommended/Recommended";
import Nav from "./Navigattion/Nav";
import Products from "./Products/products";


function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       {/* <Route path="/home" element={<Home />}></Route>
    //       <Route path="/register" element={<Register />}></Route>
    //       <Route path="/" element={<Login />}></Route> */}
    //       <Route path="/" element={<ProductListPage />}></Route>
    //       {/* <Route path="/" element={<WishlistComponent />}></Route> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <>
    <Nav/>
    <Products/>
    <Recommended/>
    </>
  );
}

export default App;
