import React from 'react'

import './header.styles.scss'

export const Header = (params) => (
  <header className='header'>
    <div className="logo">
      <img src="./assets/logo.svg" alt=""/>
    </div>
    <div className="site-title">
      code <br/> Visualized
    </div>
  </header>
)

export default Header