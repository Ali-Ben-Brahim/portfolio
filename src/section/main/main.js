
import "./main.css"
import { FaLinkedin,FaGithub} from 'react-icons/fa';
import {GrMail} from "@react-icons/all-files/gr/GrMail";


import React from 'react'

export default function mainpage() {
  return (
    <section className="main">
    <div>
    <h2>Hello, I'm Ali <br/><span>Developer</span></h2>
    <h3>Diplômé en Business Computing</h3>
    <a href="#projects" className="main-btn">View my work</a>
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/ali-ben-brahim/" target="_blank" rel="noreferre"><FaLinkedin/></a>
        <a href="https://github.com/Ali-Ben-Brahim" target="_blank" rel="noreferre"><FaGithub/></a>
        <a href="mailto:benbrahimali23@gmail.com" target="_blank" rel="noreferre"><GrMail/></a>
    </div>
</div>
</section>
  )
}


