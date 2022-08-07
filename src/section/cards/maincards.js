import React from 'react'
import './card.css'

export default function maincards(props) {
  return (
    
    <div className='card'>
        <div className='icon'>
        {props.icon}
        </div>
        <div className='info'>
            <h3>{props.service}</h3>
            <p>{props.paraghraphe}</p>
        </div>
        
        
    </div>

  )
}
