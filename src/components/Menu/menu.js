import React from 'react';
import './menu.css'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
export default function Menu({ button }) {
    return (
        
    <div className="header" elevation={20}>
        
        <a href="/" className="logo"><FlutterDashIcon fontSize='large'/>Sanjeev</a>
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
    )
}