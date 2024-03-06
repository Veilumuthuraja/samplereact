import React from 'react'
import clientone from './images/unsplash_rDEOVtE7vOs.png'
import star from './images/Group 65.png'
import clienttwo from './images/unsplash_B4TjXnI0Y2c.png'
import './Client.css'

export default function () {
  return (
   <section className='container'>

    <div className='head_flex_client'>

   <div className='child_flex_client'>

    <div className='client_img'>
        <img src={clientone} alt=''></img>
        <div>
        <h3>frishikidia</h3>
        <h6>client</h6>
        </div>
       
    </div>
    <img src={star} alt=''></img>
    <p>Lorem Ipsum to use as filler, presentations, and projects. Copy and paste the text to get started.</p>

    </div>

    <div className='child_flex_client'>

<div className='client_img'>
    <img src={clienttwo} alt=''></img>
    <div>
    <h3>Finkidia</h3>
    <h6>Client</h6>
    </div>
   
</div>
<img src={star} alt=''></img>
<p>Lorem Ipsum to use as filler, presentations, and projects. Copy and paste the text to get started.</p>

</div>

   </div>

    </section>
  )
}
