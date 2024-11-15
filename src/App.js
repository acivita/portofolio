import React from 'react';
import { NavLink, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleWorkClick = (event) => {
    event.preventDefault();

    if (location.pathname === '/') {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const workSection = document.getElementById('work');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Remonte la page en haut
  };

  return (
    <div>
       <nav className={styles.navbar}>
         <ul className={styles.navList}>
           <li>
             <NavLink
               to="/"
               className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active2}` : styles.navItem}
               onClick={scrollToTop}
             >
               HOME
             </NavLink>
           </li>
           <li><a href="#work" className={styles.navItem} onClick={handleWorkClick}>WORK</a></li>
           <li>
             <NavLink
               to="/about"
               className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
               onClick={scrollToTop}
             >
               ABOUT
             </NavLink>
           </li>
           <li>
             <NavLink
               to="/contact"
               className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
               onClick={scrollToTop}
             >
               CONTACT
             </NavLink>
           </li>
         </ul>
       </nav>

       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     </div>
  );
}

export default App;
