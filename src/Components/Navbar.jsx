import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css" 

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/about' >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='profile'>Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='login'>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/sinup'>Sign Up</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

  )
}
