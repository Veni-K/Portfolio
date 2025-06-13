import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text">
          <h1>Hi, I'm <span className="name">Veni K</span></h1>
          <h2 className="animated-title">Cybersecurity Enthusiast | Python Developer | Wildlife Photographer</h2>
          <p>You want to Know more ??</p>
          <a href="/Veni-K-CV.pdf" download className="cv-button">Download CV</a>
        </div>
        <div className="home-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
