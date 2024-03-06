import React from 'react'
import imgone from './images/Group 1954.png'
import imgtwo from './images/Group 1955.png'
import imgthree from './images/Group 1958 (1).png'
import imgfour from './images/Group 1959.png'
import './Fivecolumn.css'

export default function Fivecolumn() {
  return (
    <section className='container'>
        <div className='five_flex'>
    <div className='child_flex'>
        <img src={imgone} alt=''></img>
    </div>

    <div className='child_flex'>
        <img src={imgtwo} alt=''></img>
    </div>
        
        <div className='child_flex'>
            <h6>AVAILABLE FOR YOU</h6>
            <h1>Available course</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
            </p>
            <a href=''>See all</a>
        </div>
    <div className='child_flex'>
        <img src={imgthree}alt=''></img>
    </div>
    <div className='child_flex'>
        <img src={imgfour}alt=''></img>
    </div>
    

    </div>

    
    </section>
  )
}
