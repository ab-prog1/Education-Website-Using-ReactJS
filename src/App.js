import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/service/Services";
import Blogs from "./pages/blog/Blogs";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";







function App() {
  return (
    <BrowserRouter>
        <Header />
    
          <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Login" element={<Login />} />
          <Route  path="/Register" element={<Register /> } />
          <Route  path="/about" element={<About />} /> 
          <Route  path="/services" element={<Services />} />
          <Route  path="/Blog" element={<Blogs />} />
          <Route  path="/contact" element={<Contact />} />
        </Routes>
         <Footer />
     
        <ToastContainer />                    
      </BrowserRouter>
  );
}

export default App;
