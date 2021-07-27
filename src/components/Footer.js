import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="social-media-wrap">
          <small className="footer-text">
            Made by TAN with <i className="fas fa-heart" />
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={{ pathname: "https://facebook.com" }}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link"
              to={{ pathname: "https://instagram.com" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link"
              to={{ pathname: "https://twitter.com" }}
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link"
              to={{ pathname: "https://linkedin.com" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
