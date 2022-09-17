import React from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';

// import Home from './Routes/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import AddProduct from './components/AddProduct';

function App() {
  useEffect(() => {
    document.title = 'HeroesHomeclone';
  }, []);
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
