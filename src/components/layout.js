import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';

const Layout = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Layout;