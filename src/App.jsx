import React from 'react';

import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Home from './Routes/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddProduct from './components/AddProduct';

function App() {
  useEffect(() => {
    document.title = 'FashionsBlog';
  }, []);
  return (
    <>
      {' '}
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
