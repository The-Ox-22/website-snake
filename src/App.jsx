// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'


export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break
    case "/about":
      component = <About />;
      break
    case "/playground":
      component = <Playground />;
      break
  }
  console.log(window.location)
  return(
    <>
      <NavBar />
      <div className="container">
        {component}
      </div>
    </>
  )
  
}

