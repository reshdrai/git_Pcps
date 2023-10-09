import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Footer'
import './Css/Nav.css'
import './Css/Body.css'
import './Css/Footer.css'
import Body from './Components/Body'
import Skills from './Skills/Skills'
import Works from './Works/Works'
import './Works/Works.css'
import './Contact/Contact.css'
import Contact from './Contact/Contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App