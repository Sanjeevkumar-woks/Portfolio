import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import React, { useEffect } from 'react'
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about" id='about' >
    <h2 className="heading"><AccountCircleIcon fontSize='large'/> <sup>About <span>Me</span></sup></h2>
    
    <div className="row">

    <div className="image">
        <img data-aos="fade-right" draggable="false" className="tilt" src="https://sagarmude.netlify.app/static/media/home-main.01f37226.svg" alt=""/>
    </div>
    <div data-aos="fade-left" className="content">
        <h3>I'm <span>SanjeevKumar Managutti</span></h3>
        <span className="tag">Full Stack Developer</span>
        
        <p>I am a Full-Stack developer based in karnataka, India. 
          I am an engineering graguate in EEE.
          I am very passionate about improving my coding skills & developing applications & websites.
          I build WebApps and Websites using MERN Stack.
          Working for myself to improve my skills.
          Love to build Full-Stack clones. </p>
        
        <div className="box-container">
            <div data-aos="flip-up"  className="box">
              <p><span> age: </span> 26</p>
              <p><span> phone:</span>+91-9663111463</p>
            </div>
            <div data-aos="flip-up"  className="box">
              <p><span> email : </span> sanjeevmanagutti@gmail.com</p>
              <p><span> place : </span> Belgaum, India - 590015</p>
            </div>
        </div>
        
        <div data-aos="zoom-in" className="resumebtn">
        <Button variant="contained" size="large">
          <a href="https://drive.google.com/file/d/1MPHFjy4-hJE_lo_Zd_Qrt913Tnanv3HF/view" underline="none">
          <SimCardDownloadIcon/>Resume</a>
        </Button>
        </div>
    </div>
    </div>
</div>
  )
}
