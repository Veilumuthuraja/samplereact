import React from 'react'
import './Fourcolumn.css'
import png16 from './images/16.png'
import png50 from './images/50.png'
import png37 from './images/37.png'

export default function Fourcolumn() {
  return (
         <section className='container'>
        <div className='head_four'> 
         <div className='child_four white'>
            <h3>WHAT WE HAVE </h3>
            <h2>What do you get from us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
            </p>
         </div>
       
         <div className='child_four'>
            <img src={png16} alt='info'></img>
            <h3>Professtional Teacher</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
            </p>
         </div>
         <div className='child_four'>
            <img src={png50} alt=''></img>
            <h3> course Certificate</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
           </p>
         </div>
         <div className='child_four'>
            <img src={png37}alt=''></img>
            <h3>Interesting learing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
           </p>
         </div>
         


    </div>
    </section>
  )
}

