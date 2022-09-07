import React from 'react';
import { useEffect } from 'react';
import Card from './Component/Hero/Card';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';

// import Home from './Routes/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddProduct from './components/AddProduct';

function App() {
  useEffect(() => {
    document.title = 'HeroesHomeclone';
  }, []);
  return (
    <>
      {' '}
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}

export default App;
