import { Link, Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import { default as Home } from "./pages/Home";
import Popover from "./pages/Popover";
import Product from "./pages/Product";
import Products from "./pages/Products";
import DialogDemo from "./components/Dialog";
import CreateFruits from "./components/CreateFruits";
import ProductApi from "./pages/ProductsAPI";
import { useSelector } from "react-redux";
import SignIn from "./components/DialogSignUp";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const isAdmin = true;
  const user = useSelector((state) => state.user);
  return (
    <>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/ProductAPI">Products API</Link>

        <Link to="/admin">admin</Link>
        <div>{user.user.name}</div>
        <Popover />
        <DialogDemo />
        <SignIn />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ProductAPI" element={<ProductApi />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/admin"
          element={
            isAdmin ? <CreateFruits /> : <Navigate to="/home" replace={true} />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      footer
      <Toaster />
    </>
  );
}

export default App;
