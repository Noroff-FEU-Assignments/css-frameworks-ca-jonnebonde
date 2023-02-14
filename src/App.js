import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home  from "./components/pages/home/Home";
import News from "./components/pages/news/News";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <div>
      <Header />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;