import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (params) => (
  <header className='header'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link style={{height:'75px'}} className="navbar-brand" to="./" aria-label="Home Logo">
        <img style={{height:'100%'}} src="./assets/logo.svg" alt=""/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="./">Home
          <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./blog">Blog</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header >
)

export default Header