import React from 'react';
import './Highlight.css';

function Highlight() {
  const highlights = [
    {
      id: 1,
      number: '100+',
      title: 'Production Applications',
      description: 'Managed across AWS, GCP, and Azure with 99.95%+ uptime SLA compliance'
    },
    {
      id: 2,
      number: '15-20%',
      title: 'Cost Optimization',
      description: 'Reduced infrastructure costs quarterly through automation and resource optimization'
    },
    {
      id: 3,
      number: '4',
      title: 'Cloud Certifications',
      description: 'AWS Solutions Architect, GCP Associate, Azure Administrator, Terraform Associate'
    },
    {
      id: 4,
      number: '3+',
      title: 'Years Experience',
      description: 'SRE operations, incident management, and infrastructure automation'
    }
  ];

  return (
    <section className="highlight-section">
      <div className="container">
        <h2 className="section-title">Why Work With Me</h2>
        <div className="highlights-grid">
          {highlights.map(item => (
            <div key={item.id} className="highlight-card">
              <div className="highlight-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlight;
