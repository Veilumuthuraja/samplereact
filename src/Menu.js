import React from 'react'
import img from './images/Group 1.png'
import './Menu.css'

export default function Menu() {
  return (
    <div>
         <section className='container'>
     <div className='head_menu' >
      
       <div className='menu'> 
        <img src={img} alt='face'/>
        </div>

        <div className='menu'>
          <ul>
           <li>Home</li>
           <li>Course</li>
           <li>About us</li>
           <li>Article</li>
           <li>Contact</li>
          </ul>
        </div>
        <div className='menu'>
          <a href='' className='login'>Login</a>
          <a href='' className='register'>Register</a>
        </div>
    
     
    </div>
    
    </section>
    </div>
  )
}
