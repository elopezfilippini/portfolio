import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from './components/prueba'
import Projects from './components/projects'

function App() {

  return (
    <div className='w-screen p-0'>
    
      <div className='inline-block'>
      
      <h1 >Hola, soy  Emiliano.  </h1>
      <h2 class="subtitle">Fullstack developer </h2>
      <div className='h-[200px]'></div>


      </div>
      <div class='separator'></div>
      <Prueba/>
      <Projects/>
      </div>
    
  )
}

export default App
