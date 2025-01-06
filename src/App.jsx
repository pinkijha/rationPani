import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './utils/Context';
import CartItems from './components/CartItems';
import Category from './components/category/Category'

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Category/>} />
            <Route path="/cart" element={<CartItems />} />
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
