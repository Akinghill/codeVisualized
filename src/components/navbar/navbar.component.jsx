import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = (params) => (
  <header className='header'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink style={{ height: '75px' }} className="navbar-brand" to="./" aria-label="Home Logo">
        <img style={{ height: '100%' }} src="./assets/logo.svg" alt="" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/blog">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/about">About</NavLink>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" activeClassName="active" href=".">Contact</a>
          </li> */}
        </ul>
      </div>
    </nav>
  </header >
)

export default Header