import React from 'react';
import Header from './components/Header';
import Category from './components/Category/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './utils/Context';
import CartItems from './components/CartItems';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/cart" element={<CartItems />} />
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
