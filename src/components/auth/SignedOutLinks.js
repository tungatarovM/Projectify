import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <nav className="main-nav">
      <h2>Projectify</h2>
      <ul className="main-nav-list">
        <li className="main-nav-list__item">
          <Link to="/" className="main-nav-list__link">Home</Link>
        </li>

        <li className="main-nav-list__item">
          <Link to="/projects" className="main-nav-list__link">Projects</Link>
        </li>

        <li className="main-nav-list__item">
          <Link to="/" className="main-nav-list__link">Developers</Link>
        </li>

        <li className="main-nav-list__item">
          <Link to="/" className="main-nav-list__link">About us</Link>
        </li>
        
        <li className="main-nav-list__item">
          <Link to="/" className="main-nav-list__link">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SignedOutLinks;