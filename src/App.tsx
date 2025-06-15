import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Layout from './components/layouts/layout'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
