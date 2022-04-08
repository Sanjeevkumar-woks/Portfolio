import React from 'react'
import './Footer.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Mail } from '@mui/icons-material';
export default function Footer() {
  return (
    <div className="footer" id='footer'>

        <div className="box-container">

         <div className="box">
            <h2>Sanjeev's Portfolio</h2>
            <p>Thank you for visiting my personal portfolio website. </p>
            <p>Connect with me over socials. </p>
            <p>Keep Rising 🚀. Connect with me over live chat!</p>
         </div>

      <div className="box link">
          <h2>Quick links</h2>
          <a href="#home"><ArrowCircleRightIcon/> <sup>Home</sup></a>
          <a href="#about"><ArrowCircleRightIcon/> <sup>About</sup></a>
          <a href="#skills"><ArrowCircleRightIcon/> <sup>Skills</sup></a>
          <a href="#work"><ArrowCircleRightIcon/> <sup>Work</sup></a>
          <a href="#experience"><ArrowCircleRightIcon/> <sup>Experience</sup></a>
      </div>

      <div className="box">
          <h2>Contact info</h2>
          <p> <CallIcon/><sup>+91 966-311-1463</sup></p>
          <p><a href="mailto:sanjeevmanagutti@gmail.com" rel='noreferrer' aria-label="Mail" target="_blank"><Mail/><sup> sanjeevmanagutti@gmail.com</sup></a></p>
          <p> <LocationOnIcon/> <sup> Belgaum, India-590015</sup></p>
          <div className='share'>
          <a href="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/" rel='noreferrer' aria-label="Mail" target="_blank"><LinkedInIcon fontSize='large'/></a>
          <a href="https://github.com/Sanjeevkumar-woks" rel='noreferrer' aria-label="GitHub" target="_blank"><GitHubIcon fontSize='large' /></a>
          </div>
      </div>
      
  </div>

  <h1 className="credit">Designed with 💖 by <a href="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/">SanjeevKumar</a></h1>

</div>
  )
}
