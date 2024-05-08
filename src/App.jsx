import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
import { useState } from "react";


const App = () => {
  const[cart, setCart]=useState(0);
  console.log(cart);
  
  return (
    <div>
      <Navbar cart = {cart} />
      <Header />
      <Products cart={cart} setCart={setCart}/>
      <Footer />
    </div>
  );
};

export default App; 