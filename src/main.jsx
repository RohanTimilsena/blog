import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import TopNavBar from "./components/TopNavBar.jsx";
import BottonNavBar from "./components/BottonNavBar.jsx";
import Lifestyle from "./Pages/Lifestyle.jsx";
import Features from "./Pages/Features.jsx";
import Contact from "./Pages/Contact.jsx";

import Footer from "./components/Footer.jsx";
import PostLayout from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import JoinUspage from "./Pages/JoinUspage.jsx";
import Login from "./Pages/Login.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <TopNavBar/>
          <BottonNavBar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lifestyle" element={<Lifestyle/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/joinus" element={<JoinUspage/>} />


      </Routes>
          < Footer/>
          
    </BrowserRouter>
  </StrictMode>
);
