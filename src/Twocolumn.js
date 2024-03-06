import React from 'react'
import momson from './images/Group 1964.png'
import './Twocolumn.css'

export default function 
() {
  return (
    <section className='bg_color'>
    <div className='container'>
       <div className='two_flex'>
        <img src={momson}alt=''></img>
        </div>

        <div className='two_flex'>
          <h6>SELECTED COURSE</h6>
          <h1>people taking courses</h1>
          <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.
          ipsum dolor sit amet, consectetur  molestie. </p>
        
          <div className='num_flex'>
         <div className="child_num">
            <h6> 6000</h6>
            <h5>people view's</h5>
         </div>
         <div className="child_num">
            <h6>4000</h6>
            <h5>Users</h5>
         </div>
         <div className="child_num">
            <h6>100</h6>
            <h5>Courses</h5>
         </div>
         </div>


        </div>

    </div>
    </section>
  )
}
