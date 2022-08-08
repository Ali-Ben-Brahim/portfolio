import React from 'react'
import Projectcard from './project-card'
import './project.css'
export default function project() {
    
  return (
    <section className='projects' id='projects'>
        <h2 className='title'>Projects</h2>
        <div className='content'>
      <Projectcard img="./images/work1.png" title="Clonage Youtube" langue="ReactJS"/>
      <Projectcard img="./images/work2.png" title="TyreMatch" langue="Flutter et Php"/>
      <Projectcard img="./images/work3.png" title="Application pour des poubelles intelligente" langue="Flutter et Laravel"/>
        </div>
    </section>
  )
}
