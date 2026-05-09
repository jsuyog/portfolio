import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Made with ❤️ by <span className="footer-name"> JSuyog</span>
          </p>
          <p className="footer-credit">
            Built with <span className="footer-highlight">Claude</span>
          </p>
          <p className="footer-copyright">
            © {currentYear} Suyog J. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;