import "./css/App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vegetables" element={<Category />} />
        <Route path="/fruits" element={<Category />} />
        <Route path="/cheese" element={<Category />} />
        <Route path="/dairy" element={<Category />} />
        <Route path="/desserts" element={<Category />} />
        <Route path="/meat" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Link
        to="/cart"
        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-green-600 text-white text-[20px] md:text-[25px] flex items-center justify-center fixed bottom-[20px] right-[20px]"
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </>
  );
}

export default App;
