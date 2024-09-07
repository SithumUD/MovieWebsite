import React from 'react';
import './Footer.css'; // Ensure correct path to your CSS file
import facebooklogo from '../assets/facebook.png';
import tiktoklogo from '../assets/tiktok.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="footer-middle">
          <div className="footer-website-name">SRICINE</div>
          <ul className="footer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} SriCine. All rights reserved.
          </div>
        </div>
        <div className="footer-social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebooklogo} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktoklogo} alt="Twitter" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
}
