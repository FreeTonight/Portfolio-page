import React from "react";
import "../App.css";
import ProjectList from "../components/ProjectList";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
      <HeroSection />
      <ProjectList />
      <Footer />
    </>
  );
}

export default Projects;
