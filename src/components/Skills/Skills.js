import React, { useEffect } from 'react'
import './Skills.css'
import skills from './skills.json'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AOS from "aos";
import "aos/dist/aos.css";



export default function Skills() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="skills" id="skills">

    <h2 className="heading"><LaptopMacIcon fontSize='large'/> <sup>Skills & <span>Abilities</span></sup></h2>

    <div data-aos="fade-right" className="container">
          <div className="row" >
              {skills.map(({name,icon})=>(
                <div data-aos="flip-up"className="bar">
                    <div className="info">
                        <img data-aos="flip-up" src={icon} alt=""/>
                        <span>{name}</span>
                    </div>
                </div> 
              ))

              }
         
            
      </div>
</div>
</section>
  )
}
