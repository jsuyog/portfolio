import React, { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navigation onNavigate={scrollToSection} activeSection={activeSection} />
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
