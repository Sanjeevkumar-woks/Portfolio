import './App.css';
import { Home } from './components/Home/home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import { Button, createTheme} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import Contact from './components/Contact/Contact';
import  NavBar  from './Navbar';




function App() {
  const [mode,setMode]=useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
     {/* <Menu button={<Button onClick={()=>setMode(mode==='dark'?'light':'dark')}>{mode==='dark'?<LightModeIcon/>:<DarkModeIcon/>}</Button>}/> */}
     <NavBar button={<Button onClick={()=>setMode(mode==='dark'?'light':'dark')}>{mode==='dark'?<LightModeIcon/>:<DarkModeIcon/>}</Button>}/> 
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/> 
    </ThemeProvider>
  );
}

export default App;
