import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

     <nav className={styles.navLinks} aria-label="Footer Navigation">
          <NavLink to="/admin">Admin</NavLink>
        </nav>

        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} <strong>EcoLocator</strong>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;