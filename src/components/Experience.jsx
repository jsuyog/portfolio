import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Cloud SRE Engineer',
      company: 'HDFC Bank',
      period: 'July 2023 - Present',
      description: 'Managed 100+ production applications across AWS, GCP, and Azure with 99.95%+ uptime SLA compliance. Handled 24/7 incident management and on-call rotations. Developed serverless automation solutions using Lambda and Cloud Functions.',
      highlights: ['Managed 100+ Applications', '99.95% Uptime SLA', 'Cost Optimization 15-20%', 'Infrastructure Automation']
    },
    {
      id: 2,
      role: 'Intern – Blockchain and Cloud Engineer',
      company: 'Mobilloite Technologies',
      period: 'Feb 2023 - July 2023',
      description: 'Containerized applications using Docker and deployed on AWS EKS. Provisioned cloud infrastructure using Terraform for development and testing environments. Developed and tested Ethereum smart contracts.',
      highlights: ['Docker & EKS', 'Terraform Provisioning', 'Smart Contracts', 'CI/CD Pipelines']
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="company-name">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
