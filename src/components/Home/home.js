import React from 'react'
import './home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import TelegramIcon from '@mui/icons-material/Telegram';
import { init } from "ityped";
import { useEffect, useRef } from "react";


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
    <div className="home" id="home">
    <div  className="content">
    <h2>Hi There,<br/> I'm <span>Sanjeev</span></h2>
    <p>i am into <span  ref={textRef}></span></p>
    <div className="socials">
        <ul className="social-icons">
          <li><a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/"rel='noreferrer' target="_blank"><LinkedInIcon/></a></li> 
          <li><a className="github" aria-label="GitHub" href="https://github.com/jigar-sable" rel='noreferrer'target="_blank"><GitHubIcon/></a></li>
          <li><a class="twitter" aria-label="Twitter" href="https://twitter.com/jigar_sable" rel='noreferrer' target="_blank"><TwitterIcon/></a></li>
          <li><a class="telegram" aria-label="Telegram" href="https://t.me/lifecode5" rel='noreferrer' target="_blank"><TelegramIcon/></a></li>
          <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com/jigarsable.dev"><InstagramIcon/></a></li>
          <li><a class="dev" aria-label="Dev" href="https://dev.to/jigarsable" rel='noreferrer' target="_blank"><LogoDevIcon/></a></li>
        </ul>
      </div>
    </div>
    
<div  className="image">
    <img draggable="false" className="tilt" src="https://raw.githubusercontent.com/jigar-sable/Portfolio-Website/main/assets/images/hero.png" alt=""/>
</div>

</div>
  )
}
