import React, { useState } from 'react'
import { Link } from 'react-scroll'
import mobmenu from '../assest/mobmenu.png'
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className="containerflu">
        
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/NYCS-bull-trans-R.svg/1200px-NYCS-bull-trans-R.svg.png'className='logo' />
           <div className="desktopMenu">
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menulist'>Home</Link>
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menulist'>About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menulist'>Portfolio</Link>
           <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menulist'>Clients</Link>
           </div>
        <button className='desktop-menu ' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}><i class="fa-solid fa-envelope" ></i>  Contact me</button>
        <img src={mobmenu} className='mobmenu'onClick={()=>setShowMenu(!showMenu)} />
           <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menulist' onClick={()=>setShowMenu(false)}>Home</Link>
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menulist' onClick={()=>setShowMenu(false)}>About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menulist'onClick={()=>setShowMenu(false)}>Portfolio</Link>
           <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} duration={500} className='menulist'onClick={()=>setShowMenu(false)}>Clients</Link>
           <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='menulist'onClick={()=>setShowMenu(false)}>Contact</Link>
           </div>
    </div>
    
    </>
  )
}

export default Navbar