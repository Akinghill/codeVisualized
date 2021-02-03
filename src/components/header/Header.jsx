import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.styles.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="brand-container">
        <img className="brand-logo" src={logo} alt="code visualized" />
        <span className="brand-name">code visualized</span>
      </div>

      <nav className="nav">
        <Link className='link' to="/web-dev">web dev</Link>
        <Link className='link' to="/vr">virtual reality</Link>
      </nav>
    </header>
  );
}
