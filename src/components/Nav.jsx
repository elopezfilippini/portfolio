import React from 'react'

function Nav() {
  return (
    <div className='flex justify-end animate-fade animate-once animate-delay-[3500ms] animate-ease-linear'>
        <button className='border  border-sky-200 rounded-lg p-3 m-4 hover:bg-sky-200'>Skills</button>
        <button className='border  border-sky-200 rounded-lg p-3 m-4 hover:bg-sky-200'>Projects</button>
        <button className='border  border-sky-200 rounded-lg p-3 m-4 hover:bg-sky-200'>About me</button>

    </div>
  )
}

export default Nav