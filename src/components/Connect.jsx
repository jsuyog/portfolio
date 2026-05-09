import React from 'react';
import './Connect.css';

function Connect() {
  return (
    <section className="connect-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="connect-grid">
          <div className="connect-content">
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you want to collaborate on a cloud infrastructure project, discuss DevOps practices, 
              or just have a conversation about technology, feel free to reach out!
            </p>
            <p>
              Let's build something amazing together. From concept to production, 
              I'm here to help you create scalable, reliable systems.
            </p>
          </div>
          <div className="connect-methods">
            <h3>Get In Touch</h3>
            <a href="mailto:suyogjagtap.official@gmail.com" className="connect-link">
              <span className="link-icon">✉️</span>
              <span>Email</span>
              <span className="link-value">suyogjagtap.official@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/suyogyjagtap" target="_blank" rel="noopener noreferrer" className="connect-link">
              <span className="link-icon">💼</span>
              <span>LinkedIn</span>
              <span className="link-value">@suyogjagtap</span>
            </a>
            <a href="https://github.com/jsuyog" target="_blank" rel="noopener noreferrer" className="connect-link">
              <span className="link-icon">🔗</span>
              <span>GitHub</span>
              <span className="link-value">@jsuyog</span>
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="connect-link">
              <span className="link-icon">🐦</span>
              <span>Twitter</span>
              <span className="link-value">@suyogjagtap</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
