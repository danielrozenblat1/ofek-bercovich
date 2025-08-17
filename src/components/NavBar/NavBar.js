import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import logo from "../../images/אופק ברקוביץ לוגו.png"
import {Link as ScrollLink} from "react-scroll"
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        document.body.style.overflow = 'hidden';
    } 
};
    const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  const closeMenu = () => {
    setIsOpen(false);
  
        document.body.style.overflowY = 'auto';

  };

  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <>
      <nav className={scrolled ? styles.floatingNav :styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img className={styles.image} src={logo} alt="אופק ברקוביץ לוגו"/>
          </div>
        </div>
       {width<850 && <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>}
      
         {width>=850 && <div className={styles.row}>
          <ScrollLink to="צרי קשר" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>צרי קשר</div></ScrollLink>
          <ScrollLink to="קצת עלי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>קצת עלי</div></ScrollLink>
          <ScrollLink to="המלצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>המלצות</div></ScrollLink>
          <ScrollLink to="תטא הילינג" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>תטא הילינג</div></ScrollLink>
          <ScrollLink to="תכנית ליווי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>תכנית ליווי</div></ScrollLink>
            </div>}
      
        <div className={`${styles.navLinks} ${isOpen ? styles.openLinks : ''}`}>
          <div className={styles.closeButton} onClick={closeMenu}>
            &times;
          </div>
          <ul>
    
            <li><ScrollLink  onClick={closeMenu} to="צרי קשר" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>צרי קשר</div></ScrollLink></li>
            <li><ScrollLink  onClick={closeMenu} to="קצת עלי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>קצת עלי</div></ScrollLink></li>
            <li><ScrollLink  onClick={closeMenu} to="המלצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>המלצות</div></ScrollLink></li>
            <li><ScrollLink   onClick={closeMenu} to="תטא הילינג" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>תטא הילינג</div></ScrollLink></li>
            <li><ScrollLink   onClick={closeMenu} to="תכנית ליווי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>תכנית ליווי</div></ScrollLink></li>
            <div className={styles.logo}>
            <img className={styles.navImage} src={logo} alt="אופק ברקוביץ לוגו"/>
          </div>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className={`${styles.overlay} ${styles.openOverlay}`}></div>
      )}
    </>
  );
};

export default NavBar;