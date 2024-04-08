import { useState } from 'react';
import { FiChevronsDown } from "react-icons/fi";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Prueba from './components/prueba';
import Projects from './components/projects';
import Nav from './components/nav';

function App() {
  return (
    <div className='w-screen mx--8'>
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
        <div className='flex text-right justify-end text-4xl'>
          <FiChevronsDown className='text-4lg' />
        </div>
      </div>
      <div className='h-[100px]'></div>
      <div className='separator'></div>
      <Prueba/>
      <Projects/>
    </div>
  );
}

export default App;
