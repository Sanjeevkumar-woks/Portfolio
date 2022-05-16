import React, { useEffect } from 'react'
import './Projects.css'
import projects from './Projects.json'
import DevicesIcon from '@mui/icons-material/Devices';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CodeIcon from '@mui/icons-material/Code';
import { Button, Card, Paper } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
  <Paper className="work" id='work' elevation={20} sx={{borderRadius:"0.5px"}} >
  <h2 className="heading"><DevicesIcon fontSize='large'/> <sup>Projects <span>Made</span></sup></h2>
  <Paper data-aos="zoom-in-up" className="box-container" elevation={10}>
  
{projects.map(({name,desc,image,category,links})=>(
      <Card data-aos="fade-down-right" className="box tilt">
      <img  src={image} alt="" />
      <div className="content">
        <div className="tag">
        <h3>{name}</h3>
        </div>
        <div className="desc">
          <p>{desc}</p>
          <h3>{category}</h3>
          <div className="projectbtns">
           <Button variant="contained" color="success"><a href={links.view} rel='noreferrer'  target="_blank"><RemoveRedEyeIcon fontSize='large' /></a></Button> 
           <Button variant="contained"color="success"><a href={links.code} rel='noreferrer' className="btn" target="_blank"><CodeIcon fontSize='large'/><sup></sup></a></Button> 
          </div>
        </div>
      </div>
    </Card> 
)) }
</Paper> 
</Paper>
  )
}
