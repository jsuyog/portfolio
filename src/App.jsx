import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import About from './components/About';
import Experience from './components/Experience';
import Connect from './components/Connect';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    setMounted(true);
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      const isDark = JSON.parse(savedDarkMode);
      setDarkMode(isDark);
      applyTheme(isDark);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      applyTheme(prefersDark);
    }
  }, []);

  // Apply theme to document
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.style.colorScheme = 'dark';
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    applyTheme(newDarkMode);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <Navigation 
        onNavigate={scrollToSection} 
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
      />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="highlight">
          <Highlight />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="connect">
          <Connect />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;