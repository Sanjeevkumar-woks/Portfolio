import React, { useEffect } from 'react'
import './Experience.css'
import AOS from "aos";
import "aos/dist/aos.css";
import WorkIcon from '@mui/icons-material/Work';
import { Paper } from '@mui/material';

export default function Experience() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (

<Paper className="experience" id="experience" elevation={20} sx={{borderRadius:"0.5px"}}>

  <h2 className="heading"><WorkIcon fontSize='large'/> Experience </h2>

  <div className="timeline">

    <div data-aos="fade-right" className="container right">
      <div className="content">
        <div className="tag">
          <h2>Amazon Developmet Center</h2>
        </div>
        <div className="desc">
            <h3>Machine Learning Associate-I</h3>
            <p>Oct 2020 - present</p>
        </div>
      </div>
    </div>

    <div data-aos="fade-left" className="container left">
      <div className="content">
        <div className="tag">
          <h2>HTC Global India</h2>
        </div>
        <div className="desc">
            <h3>Programmer Analyst-I</h3>
            <p>Feb 2020 - jun 2020</p>
        </div>
      </div>
    </div>

    <div data-aos="fade-right" className="container right">
      <div className="content">
        <div className="tag">
          <h2>MERN Stack Development</h2>
        </div>
        <div className="desc">
            <h3>Full-Stack Development</h3>
            <p>Bootcamp-2021-Present</p>
        </div>
      </div>
    </div>

  </div>

  </Paper>);

}
