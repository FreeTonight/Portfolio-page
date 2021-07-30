import React from "react";
import "../App";
import Stack from "../components/Stack";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="me-container">
        <h1>Hello, I am The Anh or FreeTonight</h1>
        <p className="intro"> I am 22 years old. I am currently learning to code as I build this page. I hope you enjoy your stay.</p>
        <h1>Tech stacks that I know a thing or two about: </h1>
        <Stack />
      </div>
    </div>
  );
}
