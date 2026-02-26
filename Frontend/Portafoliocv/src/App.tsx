import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Skills from "./Routes/Skills";
import Contact from "./Routes/Contact";
import "./App.css";
import { Route, Routes } from "react-router";
import ProductOne from "./Routes/ProductOne";
import ProductTwo from "./Routes/ProductTwo";
import ProductThree from "./Routes/ProductThree";
import ProductFour from "./Routes/ProductFour";
import ScrollToTop from "./Components/Scroller";

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col bg-gray-50'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/one" element={<ProductOne />} />
          <Route path="/product/two" element={<ProductTwo />} />
          <Route path="/product/three" element={<ProductThree />} />
          <Route path="/product/four" element={<ProductFour />} />
        </Routes>
      </div>
    </>
  );
}

export default App;