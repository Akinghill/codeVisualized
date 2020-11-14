import React from 'react'

export const Header = (params) => (
  <header className='header'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a style={{height:'75px'}} className="navbar-brand" href=".">
        <img style={{height:'100%'}} src="./assets/logo.svg" alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href=".">Home
          <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./blog">Blog</a>
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