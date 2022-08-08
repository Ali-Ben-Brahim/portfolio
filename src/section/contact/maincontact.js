import React from 'react';
import Contact from './contact';
import './contact.css';
import { AiFillMail} from 'react-icons/ai';
import { BsTelephoneFill} from 'react-icons/bs';
export default function maincontact() {
  
  return (
    <section className='cards' id='contact'>
      <h2 className='title'>Let's work together</h2>
      <div className='content'>
      <Contact icon={<BsTelephoneFill/>} contact="Phone" contactId="+216 96 901 100"/>
      <Contact icon={<AiFillMail/>} contact="E-mail" contactId="Benbrahimali23@gmail.com"/>
      </div>
    </section>
  )
}
