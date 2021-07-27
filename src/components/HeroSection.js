import React from "react";
// import { Link } from 'react-router-dom';
import "../App.css";
// import { Button } from './Button';
import "./HeroSection.css";
import Scroll from "./Scroll";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Check out my projects</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <Scroll />
      </div>
    </div>
  );
}

export default HeroSection;
