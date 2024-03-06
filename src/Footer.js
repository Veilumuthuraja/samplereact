import React from 'react'
import logo from './images/Group 1.png'
import fb from './images/facebook.png'
import twitter from './images/twetter.png'
import inlinked from './images/linkedin.png'
import insta from './images/instagram (2).png'
import './Footer.css'

export default function () {
  return (
    <section className='background'>
   
      <div className='color'>
    
      <div className='main_flex'>
    
     <div className='flex_child'>
        <img src={logo} alt=''></img>
        <p>Lorem Ipsum to use as filler, presentations, and projects. Copy and paste the text to get started.</p>

        <img src={fb} alt=''></img>
        <img src={twitter} alt=''></img>
        <img src={inlinked} alt=''></img>
        <img src={insta} alt=''></img>
     </div>
    

  
    <div className='flex_child'>
        <ul>
            <li> <strong>Home</strong></li>
            <li>Product</li>
            <li>Course</li>
            <li>about us </li>
            <li>log in</li>
        </ul>
    </div>
    <div className='flex_child'>
        <ul>
            <li> <strong>course</strong></li>
            <li> HTML & CSS</li>
            <li>Javascript</li>
            <li>Fotographer</li>
            <li>Desain craft</li>
        </ul>
    </div>
    <div className='flex_child'>
        <ul>
            <li> <strong>Articles</strong></li>
            <li>New</li>
            <li>Old</li>
            <li>trent</li>
            <li>Popular</li>
        </ul>
    </div>
    <div className='flex_child'>
        <ul>
            <li>  <strong>Contactus</strong></li>
            <li> abcdef@gmail.com</li>
            
        </ul>
    </div>
   

    </div>




    </div>





    </section>
  )
}
