import React from 'react'
import './footer.css'
import { FaLinkedin,FaGithub} from 'react-icons/fa';
import {GrMail} from "@react-icons/all-files/gr/GrMail";
export default function footer() {
  return (
    <footer className='footer'>
        <p className='footer-title'>Ali Ben Brahim @ <span>ABBTN</span></p>
        <div className="social-icons-footer">
        <a href="https://www.linkedin.com/in/ali-ben-brahim/" target="_blank" rel="noreferre"><FaLinkedin/></a>
        <a href="https://github.com/Ali-Ben-Brahim" target="_blank" rel="noreferre"><FaGithub/></a>
        <a href="mailto:benbrahimali23@gmail.com" target="_blank" rel="noreferre"><GrMail/></a>
    </div>
    </footer>
  )
}
