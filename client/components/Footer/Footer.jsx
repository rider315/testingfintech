// Footer.jsx
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">WintWealth</h3>
            <p className="footer-description">
              Making high-yield investments accessible to everyone through a secure and transparent platform.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Investments</a></li>
              <li><a href="#" className="footer-link">Learn</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Legal</h4>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Disclaimer</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect With Us</h4>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-link"><Facebook className="footer-social-icon" /></a>
              <a href="#" className="footer-social-link"><Twitter className="footer-social-icon" /></a>
              <a href="#" className="footer-social-link"><Linkedin className="footer-social-icon" /></a>
              <a href="#" className="footer-social-link"><Instagram className="footer-social-icon" /></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">© {new Date().getFullYear()} WintWealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;