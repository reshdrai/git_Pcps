import React from 'react'
import working from '../assest/working.jpg'
import Designing from '../assest/Designing.jpg'
function Works() {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksdes">Are you in search of a creative and skilled web designer who can transform your online vision into stunning, user-friendly reality? Look no further!</span>
        <div className="worksimgs">
            <img src={working}  className="worksimg" />
            <img src={Designing}  className="worksimg" />
            <img src={working}  className="worksimg" />
            <img src={Designing}  className="worksimg" />
            <img src={working}  className="worksimg" />
            <img src={Designing}  className="worksimg" />
        </div>
        <button className="worksbton">See more</button>
    </section>
  )
}

export default Works