import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Signin from './pages/Signin';
import About from './pages/About';
import Contact from './pages/Contact';
// import Middle from './components/middle';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';






function App() {
  return (
    <Router>
    <div className="bg-black h-screen">
      <Navbar />
      <Hero/>
      <Analytics/>
      {/* <Newsletter/> */}
      <Footer/>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/account" element = {<Account/>} />
        <Route path = "/signin" element = {<Signin/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/contact" element = {<Contact/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
