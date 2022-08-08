import React from 'react'
import './project.css'
export default function projectcard(props) {
  return (
    <div className='project-card'>
        <div className='project-image'>
            <img src={props.img} alt={props.title} />
            </div> 
            <div className='project-info'>
            <p>{props.title}</p>
            <strong className='project-title'>
                <span>{props.langue}</span>
                <a href="#" className='more-details'>More details</a>
            </strong>
            </div>   

    </div>
  )
}
