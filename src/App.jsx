import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './Pages/Details'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Blog/:id' element={<Details/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App