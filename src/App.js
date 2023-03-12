import React from "react";
import "./sass/style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Index";
import News from "./pages/news/Index";
import Contact from "./pages/contact/Index";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
