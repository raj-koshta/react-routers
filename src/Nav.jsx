import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Nav = () => {
  return (
    <div className='nav_style'>
        <NavLink exact to='/home'>Home</NavLink>
        <NavLink exact to='/about_us' style={{marginLeft: "50px"}}>AboutUs</NavLink>
        <NavLink exact to='/contact_us' style={{marginLeft: "50px"}}>ContactUs</NavLink>
    </div>
  )
}

export default Nav