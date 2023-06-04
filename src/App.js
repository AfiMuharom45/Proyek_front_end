import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/producList';
import Home from './components/home';

function App() {
  const [setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList addProduct={addProduct} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
