import React, { useEffect } from 'react'
import './Projects.css'
import projects from './Projects.json'
import DevicesIcon from '@mui/icons-material/Devices';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CodeIcon from '@mui/icons-material/Code';
import { Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <div class="work" id='work'>
  <h2 class="heading"><DevicesIcon fontSize='large'/> <sup>Projects <span>Made</span></sup></h2>
  <div class="box-container">
  
{projects.map(({name,desc,image,category,links})=>(
    <>
        <div data-aos="fade-down-right" class="box tilt">
      <img  src={image} alt="" />
      <div class="content">
        <div class="tag">
        <h3>{name}</h3>
        </div>
        <div class="desc">
          <p>{desc}</p>
          <h3>{category}</h3>
          <div class="btns">
           <Button variant="contained"><a href="#home" class="btn"  target="_blank"><RemoveRedEyeIcon fontSize='large'/></a></Button> 
           <Button variant="contained"><a href="https://github.com/jigar-sable/Portfolio-Website" rel='noreferrer' class="btn" target="_blank"><CodeIcon fontSize='large'/><sup></sup></a></Button> 
          </div>
        </div>
      </div>
    </div> 
</>
)) }
</div> 
</div>
  )
}
