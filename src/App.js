import React from 'react';
import "./sass/style.scss";
import { Routes, Route } from 'react-router-dom';
import Heading from "./components/heading/Heading";
import Home from "./components/pages/home/Home";
import News from "./components/pages/news/News";
import Contact from "./components/pages/contact/Contact";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className='wrapper'>
      <Heading/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </div>
        <Footer />
    </>
  );
}

export default App;