import React from 'react'
import './contact.css'

export default function contact(props) {
  return (
    <div className='card'>
        <div className='icon'>
        {props.icon}
        </div>
        <div className='info'>
          <h3>{props.contact}</h3>
          <p>{props.contactId}</p>
        </div>
      </div>
  )
}
