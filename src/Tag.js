import React from 'react'
import tag1 from './images/46.png'
import tag2 from './images/46 (1).png'
import './Tag.css'

export default function () {
  return (
    <div>
        <div className='tag_img'>
    
    <div>
    <img  className="yellow" src={tag1} alt=''></img>
    </div>
    <div>
    <img  className="yellow" src={tag2} alt=''></img>
    </div>
    
       </div>
    </div>
  )
}
