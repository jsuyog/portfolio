import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Cloud SRE Engineer <br />
            <span className="highlight">& Kubernetes Enthusiast</span>
          </h1>
          <p>
            3+ years of experience operating and optimizing large-scale production environments across AWS, GCP, and Azure. Expertise in infrastructure automation, Kubernetes operations, and building highly available, fault-tolerant systems.
          </p>
          <div className="hero-actions">
            <button className="btn" onClick={() => onNavigate('about')}>Explore My Work</button>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
