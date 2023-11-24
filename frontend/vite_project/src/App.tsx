import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Components/views/Helper/header'
import Home from './Components/views/Home/Home'
import Footer from './Components/views/Helper/Footer'

import './style.scss';
import $ from 'jquery';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Footer/>
    </>
  )
}

export default App
