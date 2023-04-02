import React from 'react'
import { Link } from 'react-router-dom'
import Dirham from '../../assets/dirham.jpg'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar'>
          <img src={Dirham} alt='Dirham' className='rounded-circle mb-2' height='150px' />
            <Link className='mb-2' to={'/'}>Home</Link>
            <Link className='mb-2' to={'/about'}>About</Link>
            <Link className='mb-2' to={'/experience'}>Experience</Link>
            <Link className='mb-2' to={'/education'}>Education</Link>
            <Link className='mb-2' to={'/skills'}>Skills</Link>
            <Link className='mb-2' to={'/interest'}>Interest</Link>
            <Link className='mb-2' to={'/awards'}>Awards</Link>
        </div>
    </nav>
  )
}

export default Navbar