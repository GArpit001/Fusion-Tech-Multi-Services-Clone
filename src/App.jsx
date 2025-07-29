import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TopNavbar from './components/TopNavbar.jsx'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import About from './components/About.jsx'
import "./App.css"
import { Route, Routes } from 'react-router'
import Home from './components/Home.jsx'
import Contact from './components/contact.jsx'
import About_Who from './components/About_Who.jsx'
import About_Our from './components/About_Our.jsx'
import Service_Staff from './components/Service_Staff.jsx'
import About_Profile from './components/About_Profile.jsx'
import Service_RPO from './components/Service_RPO.jsx'
import Service_Project from './components/Service_Project.jsx'

function App() {

  return (
    <>

      <TopNavbar />
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/who-we-are' element={<About_Who />} />
        <Route path='our-mission-&-vision' element={<About_Our />} />
        <Route path='company-Profile' element={<About_Profile />} />
        <Route path='/staffing' element={<Service_Staff />} />
        <Route path='/RPO' element={<Service_RPO />} />
        <Route path='/project-consultancy' element={<Service_Project />} />
        <Route path='/contact' element={<Contact />} />




      </Routes>
      {/* 
      <Slider/>
      <About/> */}


    </>
  )
}

export default App
