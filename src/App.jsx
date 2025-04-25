import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {Router,Routes,Route} from 'axios'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App