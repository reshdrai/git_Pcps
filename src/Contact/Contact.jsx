import React from 'react'
import facebook from '../assest/facebook.png'
import microsoft from '../assest/microsoft.png'
import fbicon from '../assest/fbicon.png'
import igicon from '../assest/igicon.png'
import yticon from '../assest/yticon.png'
function Contact() {
  return (
   <section id="contactpage">
    <div id="clients">
        <h1 className="contacttitle">Clients</h1>
        <p className="clientdes">I invite you to explore a curated collection of my best work in the field of web design. With a passion for aesthetics, a commitment to user experience, and a knack for turning ideas. </p>
        <div className="clientimgs">
            <img src={facebook}  className="clientimg" />
            <img src={microsoft}  className="clientimg" />
        </div>
    </div>
    <div id="contact">
        <h1 className="contacttitle">Contact me</h1>
        <span className="contactdesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactform">
            <input type="text" className='name' placeholder='Your name'/>
            <input type="email" className='email' placeholder='Your Email'/>
            <textarea name="message" className='textarea'  rows="5" placeholder='Your message'></textarea>
            <button type='submit' value='send' className="submitbton">Submit</button>
            <div className="links">
                <img src={fbicon}  className="link" />
                <img src={igicon}  className="link" />
                <img src={yticon}  className="link" />
                
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact