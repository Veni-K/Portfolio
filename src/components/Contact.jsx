import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you want to work with me, then <a href="mailto:venik.kunnakkatt@gmail.com" className="highlight">connect</a>!</p>

      <div className="contact-links">
        <a href="mailto:venik.kunnakkatt@gmail.com">📧 venik.kunnakkatt@gmail.com</a>
        <a href="tel:+918157021721">📞 8157021721</a>
        <a href="https://github.com/Veni-K" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/veni-k-505b38224" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/veni_kunnakkatt" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://t.me/Annaraasumanaraaa" target="_blank" rel="noopener noreferrer">
          <FaTelegram /> Telegram
        </a>
      </div>
    </section>
  );
};

export default Contact;
