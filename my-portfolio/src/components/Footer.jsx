import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/realrohitsingh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/rohit-singh-b10374189/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p>© 2025 Rohit Singh. All rights reserved.</p>
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
