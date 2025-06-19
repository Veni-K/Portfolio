import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p className="animated-text">
        I'm a passionate learner and a dedicated problem-solver, always eager to expand my knowledge in the field of technology. I have a strong interest in software development and machine learning, and I continuously explore innovative approaches to solve real-world challenges. My academic journey and hands-on projects have helped me build a strong foundation in coding, security, and AI.
      </p>

      <div className="details">
        <div className="box">
          <h3>Interests</h3>
          <ul>
            <li>Software Development</li>
            <li>Machine Learning</li>
          </ul>
        </div>
        <div className="box">
          <h3>Skills</h3>
          <ul>
            <li>C</li>
            <li>SQL</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
