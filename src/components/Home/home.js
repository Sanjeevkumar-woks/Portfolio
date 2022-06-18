import React from 'react'
import './home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Paper } from '@mui/material';


export  function Home() {
    const textRef = useRef();
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Full-Stack Dev","MERN-Stack","Frontend Dev","Backend Dev"],
      });
    }, []);
  return (
   
      <Paper className="home" id="home" elevation={20} sx={{borderRadius:"0.5px"}}>
    <div  className="content">
    <h2>Hi There,<br/> I'm <span>Sanjeev</span></h2>
    <p>i am into <span  ref={textRef}></span></p>
    <div className="socials">
        <ul className="social-icons">
          <li><a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/"rel='noreferrer' target="_blank"><LinkedInIcon/></a></li> 
          <li><a className="github" aria-label="GitHub" href="https://github.com/Sanjeevkumar-woks" rel='noreferrer'target="_blank"><GitHubIcon/></a></li>
        </ul>
      </div>
    </div>
    
<div  className="image">
    <img draggable="false" className="tilt" src="https://raw.githubusercontent.com/jigar-sable/Portfolio-Website/main/assets/images/hero.png" alt=""/>
</div>
</Paper>

  )
}
