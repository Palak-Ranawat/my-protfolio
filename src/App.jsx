
import Navbar from "./components/Navbar";
import Home from './section/Home'
import About from './section/About' 
import Skills from './section/Skills' 
import Project from './section/Project' 
import Experience from './section/Experience' 
import Testimonial from './section/Testimonial' 
import Contact from './section/Contact' 
import Fotter from './section/Fotter'
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackgraound";
export default function App(){
  return(
    <div className="relative min-h-screen bg-black text-white">
      <CustomCursor/>
      <ParticleBackground/>
      <Navbar/>
      <Home/>
      <About/> 
      <Skills/> 
      <Project/> 
      <Experience/> 
      <Testimonial/> 
      <Contact/> 
      <Fotter/>
      
    </div>
  )
}