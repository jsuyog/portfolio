import React from 'react';
import './Navigation.css';

function Navigation({ onNavigate, activeSection, darkMode, setDarkMode }) {
  return (
    <nav className="navbar" data-theme={darkMode ? 'dark' : 'light'}>
      <div className="container navbar-wrapper">
        <div className="logo">
          <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>JSuyog</h4>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => onNavigate('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => onNavigate('about')}
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => onNavigate('experience')}
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'connect' ? 'active' : ''}
              onClick={() => onNavigate('connect')}
            >
              Let's Connect
            </button>
          </li>
          <li>
            <a href="#resume" className="nav-btn">Resume</a>
          </li>
          <li>
            <button 
              className="dark-mode-btn"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;