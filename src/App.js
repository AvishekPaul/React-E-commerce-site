import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<ProductList />} />
        <Route path="/pr" element={<Product />} />
        <Route path="/r" element={<Register />} />
        <Route path="/l" element={<Login />} />
        <Route path="/c" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
