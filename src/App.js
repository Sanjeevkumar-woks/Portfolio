import './App.css';
import Menu from './components/Menu/menu';
import { Home } from './components/Home/home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';



function App() {
  
  return (
    <div>
    <Menu/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Footer/>
    </div>
  );
}

export default App;
