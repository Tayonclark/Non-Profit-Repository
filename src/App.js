// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact2";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";
import Programs from "./pages/Programs";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
