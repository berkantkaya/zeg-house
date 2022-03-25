//import Navbar from "./components/Navbar";
//import PromotionHead from "./components/PromotionHead";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./screens/Info";
import Footer from "./screens/Footer";
import Product from "./screens/Product";
import About from "./screens/About";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/information" element={<Info />} /> 
          <Route exact path="/about" element={<About />} />      
          <Route exact path="/products" element={<Product />} />     
      </Routes>
      <Footer/>
    </BrowserRouter>
     
    </>
  );
}

export default App;
