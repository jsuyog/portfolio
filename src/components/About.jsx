import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-content">
            <p>
              I'm a Cloud Site Reliability Engineer with 3+ years of experience operating and optimizing large-scale production environments across AWS, GCP, and Azure. At HDFC Bank, I manage 100+ production applications with 99.95%+ uptime SLA compliance, handling 24/7 incident management and on-call rotations.
            </p>
            <p>
              My expertise spans infrastructure automation with Terraform, Kubernetes operations (EKS/GKE), serverless solutions using AWS Lambda and Cloud Functions, and building highly available, fault-tolerant systems. I've developed automation solutions that reduced infrastructure costs by 15-20% quarterly by identifying and cleaning up orphaned resources across cloud platforms.
            </p>
            <p>
              I'm skilled in proactive monitoring and alerting using tools like Prometheus, Grafana, CloudWatch, and Site24x7. I have a strong background in incident response, root cause analysis, and post-mortem documentation, contributing to continuous improvement of system reliability and performance.
            </p>
            <p>
              I hold 4 industry certifications: AWS Solutions Architect Associate, Google Cloud Associate Engineer, Azure Administrator Associate, and HashiCorp Terraform Associate. I'm passionate about infrastructure as code, modular design, system design, observability, and building scalable systems that drive business value.
            </p>
          </div>
          <div className="about-skills">
            <h3>Core Competencies</h3>
            <div className="skills-tags">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">GCP</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Terraform</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">Lambda</span>
              <span className="skill-tag">Prometheus</span>
              <span className="skill-tag">Grafana</span>
              <span className="skill-tag">CloudWatch</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Bash</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Go</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
