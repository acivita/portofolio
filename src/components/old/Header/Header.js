import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Logo } from '../Logo.svg';

const Header = ({ changeTheme, scrollToBlackFrame }) => {

  const navigate = useNavigate();

 const handleWorkClick = (event) => {
   event.preventDefault();
   navigate('/'); 
   setTimeout(() => scrollToBlackFrame(), 100);
 };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><Link to="/">H<span className="first-letter">O</span>ME</Link></li>
          <li><Link to="/work" onClick={handleWorkClick}>W<span className="first-letter">O</span>RK</Link></li>
          <li><Link to="/about">AB<span className="first-letter">O</span>UT</Link></li>
          <li><Link to="/contact">C<span className="first-letter">O</span>NTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
