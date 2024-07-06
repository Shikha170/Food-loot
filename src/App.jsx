import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Placeorder from './pages/placeorder/Placeorder';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';
import ContextProvider from './context/Context'; // Import ContextProvider

const App = () => {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <ContextProvider>
      {/* Wrap your app with ContextProvider */}
      {showLogin && <Login setShowlogin={setShowlogin} />}
      <div className='app'>
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </ContextProvider>
  );
};

export default App;
