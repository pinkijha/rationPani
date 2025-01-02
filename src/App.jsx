import React from 'react'
import Header from './components/Header'
import Category from './components/Category/Category'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './utils/Context'

const App = () => {
  return (
    <BrowserRouter>
   <ContextProvider>
   <div>
      <Routes>
      <Route path='/' element={
        <div>
          <Header/> 
          <Category/>
        </div>
      }/>      
      </Routes>
    </div>
   </ContextProvider>
    </BrowserRouter>
  )
}

export default App
