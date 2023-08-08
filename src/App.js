import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import "./index.css";
import Home from "./pages/Home";
import BlogSingle from "./pages/BlogSingle";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
