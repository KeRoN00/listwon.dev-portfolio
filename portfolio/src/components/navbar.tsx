import React from 'react'
import Logo from './logo'

const Navbar: React.FC = () => {
  return (
    <nav className='flex max-w-5xl w-full h-12 bg-slate-400 justify-center items-center'>
        <Logo />
    </nav>
  )
}

export default Navbar