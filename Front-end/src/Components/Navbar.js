/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className="head">
      <div className="logo">
        <img src='https://www.apagcosyst.com/wp-content/uploads/audi.png' />
      </div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Booking"}>Booking</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Slider"}>Slider</NavLink>
      
        

      </div>
      <div>
        <div className='head12'>
        <NavLink to={"/Login"}>Login/SignUp</NavLink>
        {/* <NavLink to={"/Login"}>SignUp</NavLink> */}
        </div>
        <div>
          
        </div>
        <Link/>




      </div>
    </div>
  )
}
