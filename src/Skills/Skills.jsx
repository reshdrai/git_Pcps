import React from 'react'
import Website from '../assest/Website.png'
import Video from '../assest/Video.png'
function Skills() {
  return (
  <section id='skills'>
    <span className="title">What I Do</span>
    <span className="skill-description">I'm a skilled website designer with experience creating user friendly websites. I'm a creative force in the digital world, capable of transforming ideas into captivating online experiences.</span>
    <div className="skillBars">
        <div className="skillbar">
            <img src={Website} className='skillbarimg'/>
            <div className="skillBartext">
                <h2>Website Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
        
    </div>
    <div className="skillBars">
        <div className="skillbar">
            <img src={Video} className='skillbarimg'/>
            <div className="skillBartext">
                <h2>Video Editing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
        
    </div>
 
  </section>
  )
}

export default Skills