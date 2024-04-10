import { useState } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import './App.css';
import Prueba from './components/Prueba';
import Projects from './components/Skills';
import Nav from './components/nav';
import video from "./assets/videos/video.mp4";
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop -100,
      behavior: 'smooth'
    });
  }
}

function App() {
  return (
<div class=' m:max-w-none m:w-full l:max-w-none l:w-full 2xl:max-w-none xl:max-w-none xl:w-full'>

      <div className='items-end '>
        <Nav />
      </div>
      <div className='h-72'></div>
      <div className=''>
        <div className='inline-block'>
          <h1>Hi, i´m Emiliano.</h1>
          <h2 className="subtitle">Fullstack developer</h2>
          <div className='h-[100px]'></div>
        </div>
        <div className='animate-shake animate-once animate-delay-[3500ms] animate-ease-linear flex text-center justify-center text-2xl mr-4'>
          {/* Llama a la función scrollToSection con el ID de la sección deseada al hacer clic en el enlace */}
          <a className=' animate-fade animate-once animate-delay-[4000ms] ' href="#experience" onClick={(event) => scrollToSection(event, 'experience')}>
            <FiChevronsDown className='text-5xl animate-shake animate-once animate-delay-[3500ms] animate-ease-linear' />
          </a>
        </div>
      </div>
      <div className='h-[500px]'></div>
      <div className='separator'></div>


      <section id="experience"> 
        <Prueba/>
      </section>
      <div className='pt-5 flex text-center justify-center text-2xl mr-4'>
          {/* Llama a la función scrollToSection con el ID de la sección deseada al hacer clic en el enlace */}
          <a className=' animate-fade animate-once animate-delay-[4000ms] ' href="#experience" onClick={(event) => scrollToSection(event, 'skills')}>
            <FiChevronsDown className='text-5xl ' />
          </a> </div>
      <section id="skills"> 
        <Skills/>
      </section>
      <div className=' flex text-center justify-center text-2xl mr-4'>
          {/* Llama a la función scrollToSection con el ID de la sección deseada al hacer clic en el enlace */}
          <a className=' animate-fade animate-once animate-delay-[4000ms] ' href="#experience" onClick={(event) => scrollToSection(event, 'about')}>
            <FiChevronsDown className='text-5xl ' />
          </a> </div>
          <section id="about"> 
      <Aboutme/>    </section>
    </div>
  );
}

export default App;
