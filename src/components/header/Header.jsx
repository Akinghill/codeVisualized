import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.styles.scss';

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="brand-container">
          <img className="brand-logo" src={logo} alt="code visualized" />
          <span className="brand-name">code visualized</span>
        </Link>
      </header>
      <div className="spacer"></div>
    </>
  );
}
