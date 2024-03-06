import React from 'react'
import groupimg3 from './images/Group 3.png'
import groupimg6 from './images/Group 6.png'
import './Contentbox.css'

export default function () {
  return (
    <section className='container'>
    <div className='main'>
     <div className='child_main'>
        <h5>Let's Begin</h5>
        <h1>Let's Find The Right <span>Course</span>  for You</h1>
        <p>lorem and lorem lorem lorem loerm iosum and sre bur oposite ad fighty vlib and sturdar arebke appl 
        </p>

        <div className='simple'>
        <a href=''>Register</a>
    <img src={groupimg3} alt=''></img>
        <h4>Play video</h4>
        </div>

        </div>
        <div className='child_main'>
            <img src={groupimg6} alt=''></img>
        </div>

    

    </div>
    </section>
  )
}
