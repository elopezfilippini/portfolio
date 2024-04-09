import { useState } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import './App.css';
import Prueba from './components/prueba';
import Projects from './components/projects';
import Nav from './components/nav';
import video from "./assets/videos/video.mp4";

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
}

function App() {
  return (
    <div className='w-full'>
      <div className='items-end'>
        <Nav/>
      </div>
      <div className='h-72'></div>
      <div>
        <div className='inline-block'>
          <h1>Hola, soy Emiliano.</h1>
          <h2 className="subtitle">Fullstack developer</h2>
          <div className='h-[100px]'></div>
        </div>
        <div className='flex text-right justify-end text-2xl mr-4'>
          {/* Llama a la función scrollToSection con el ID de la sección deseada al hacer clic en el enlace */}
          <a href="#experience" onClick={(event) => scrollToSection(event, 'experience')}>
            <FiChevronsDown className='text-5xl' />
          </a>
        </div>
      </div>
      <div className='h-[500px]'></div>
      <div className='separator'></div>


      <section id="experience"> 
        <Prueba/>
      </section>
      
      <Projects/>
    </div>
  );
}

export default App;
