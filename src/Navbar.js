import { Close, Menu } from '@mui/icons-material';
import { IconButton, Link, } from '@mui/material'
import React, { useState } from 'react'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import './components/Menu/menu.css'



export default function Navbar({ button }) {
  const [navStatus, setNavStatus] = useState(true);
  
  const CloseMenu = () =>{
    document.getElementById('c-nav').style.transform = 'translateY(-100vh)'
    setNavStatus(false)
  }
  const OpenMenu = () =>{
    document.getElementById('c-nav').style.transform = 'translateY(0vh)'
    setNavStatus(true)
  }
  return (<>
     <div className="header" >
       <div className='collopse-btn'>
      <IconButton 
      
        onClick={!navStatus ? OpenMenu : CloseMenu}
      >
        {!navStatus ? <><Menu fontSize= "large"/>  </> :<Close  fontSize='large' />}
      </IconButton>
      </div>
      <Link to="/" className="logo" style={{ textDecoration:"none"}} > <FlutterDashIcon fontSize='large'/>Sanjeev</Link>
      <div className="navbar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>{button}</li>
            </ul>
        </div>
    </div>
    <div
      className='collopse-nav' id="c-nav" 
      >
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>{button}</li>
            </ul>
      </div>
      
    </>
  )
}
