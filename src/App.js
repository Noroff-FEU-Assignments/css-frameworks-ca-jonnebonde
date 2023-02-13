import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home  from "./components/pages/home/Home";
import News from "./components/pages/news/News";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;