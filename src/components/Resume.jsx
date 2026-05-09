import React from 'react';
import './Resume.css';

function Resume() {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    // You can replace this with an actual resume file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1bHRnmig9nIyIUhKWdGG4m3WgpI5wPgvU/view?usp=drive_link'; // Update this path to your actual resume
    link.download = 'https://drive.google.com/file/d/1bHRnmig9nIyIUhKWdGG4m3WgpI5wPgvU/view?usp=drive_link';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-container">
          <div className="resume-preview">
            <div className="resume-placeholder">
              <div className="placeholder-icon">📄</div>
              <p>Suyog_Resume.pdf</p>
              <span>Cloud SRE Engineer </span>
            </div>
          </div>
          <div className="resume-actions">
            <h3>Get My Resume</h3>
            <p>Download my detailed resume to learn more about my experience, skills, and projects.</p>
            <button className="btn btn-download" onClick={handleDownloadResume}>
              <i className="icon">⬇️</i>
              Download Resume
            </button>
            <p className="resume-note">PDF • 2 Pages • Last Updated: 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
