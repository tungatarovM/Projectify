import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="main-nav__list">
      <li className="main-nav__item">
        <Link to="/" className="main-nav__link">Home</Link>
      </li>

      <li className="main-nav__item">
        <Link to="/projects" className="main-nav__link">Projects</Link>
      </li>

      <li className="main-nav__item">
        <Link to="/" className="main-nav__link">Developers</Link>
      </li>

      <li className="main-nav__item">
        <Link to="/" className="main-nav__link">About us</Link>
      </li>

      <li className="main-nav__item">
        <Link to="/" className="main-nav__link">Sign Out</Link>
      </li>
      {/* <li className="main-nav__item">
        <Link to="/" className="main-nav__link"><i className="fas fa-user-circle"></i></Link>
      </li> */}
    </ul>
  )
}

export default SignedInLinks;