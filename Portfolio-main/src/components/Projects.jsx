import React from 'react';
import './Projects.css';
import cybergram from '../assets/cybergram.jpg';
import hybrid from '../assets/hybrid.png';
import alumni from '../assets/alumni.png';

const Projects = () => {
  const projectList = [
    {
      title: 'CyberGram',
      image: cybergram,
      description: 'An AI-based social networking platform with cyberbullying detection, chat, and profile management.',
      github: 'https://github.com/Veni-K/CYBERGRAM.git'
    },
    {
      title: 'Hybrid Cryptography',
      image: hybrid,
      description: 'A hybrid encryption system combining Vigenère and Polybius ciphers for enhanced data security.',
      github: 'https://github.com/Veni-K/Hybrid-Cryptography.git'
    },
    {
      title: 'Alumni Hub',
      image: alumni,
      description: 'A full-stack platform to connect alumni and students for sharing opportunities and networking.',
      github: 'https://github.com/Veni-K/Alumni-Hub.git'
    },
    {
      
      title: 'Heart Diseases Prediction',
      description: 'Using ML predict the person has normal or heart diseases with an accuracy of 80.5% .',
      github: 'https://github.com/Veni-K/Heart-Diseases-prediction.git'
    },
    {
      
      title: 'Breast cancer classification',
      description: 'Using ML predict the the cell is Malignant tumor (cancer) or Benign tumor (Not effictive) .',
      github: 'https://github.com/Veni-K/Breast-cancer-classification.git'
    }
    
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
