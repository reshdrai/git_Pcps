import React from 'react'
import { Link } from 'react-scroll'

function Body() {
  return (
    <section id='intro'>
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">I'm <span className="introname">Resh</span> <br/>Website Designer</span>
        <p className="intropar">I'm a skilled website designer with experience creating <br/>user friendly websites </p>
       <Link> <button className="bton"><i class="fa-solid fa-bag-shopping"></i> Hire me </button></Link>
      </div>
      
    </section>
  )
}

export default Body