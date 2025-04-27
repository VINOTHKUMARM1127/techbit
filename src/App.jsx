import React, { useEffect } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Details from './Pages/Details'
import Contactus from './Pages/Contactus'
import Policies from './Pages/Policies'
import About from './Pages/About'
import Faq from './Pages/Faq'

const App = () => {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Blog/:id' element={<Details/>} />
        <Route path='/Contactus' element={<Contactus/>} />
        <Route path='/Policies' element={<Policies/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Faq' element={<Faq/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App