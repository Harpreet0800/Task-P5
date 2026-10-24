import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Explore</h3>
        <p><Link to="/">Home</Link></p>
        <p><a href="/#work">Projects</a></p>
        <p><a href="/#articles">Articles</a></p>
        <p><a href="/#tutorials">Tutorials</a></p>
      </div>

      <div className="footer-column">
        <h3>Account related</h3>
        <p><a href="/#contact">Contact</a></p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/register">Create an account</Link></p>
      </div>

      <div className="footer-column">
        <h3>Social Handles</h3>
        <p>
          <FaInstagram />
          <a href="https://www.instagram.com/harpreet_0800/" target="_blank" rel="noreferrer">
            Instagram: harpreet_0800
          </a>
        </p>

        <p>
          <FaTelegram />
          <a href="https://t.me/Rasmalai0800" target="_blank" rel="noreferrer">
            Telegram: Rasmalai@0800
          </a>
        </p>

        <p>
          <FaEnvelope />
          <a href="mailto:YOUR_EMAIL@gmail.com">
            harpreet9032.ai25@chitkara.edu.in
          </a>
        </p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DEV@Deakin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;