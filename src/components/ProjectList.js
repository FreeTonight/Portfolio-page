import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import { useState } from "react";
import "./ProjectList.css";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const project = [
  {
    name: "Porfolio page",
    link: {pathname: "https://github.com/FreeTonight/Portfolio-page"},
    stack: ["Html", "Css", "React"],
    description: "My very first project"
  },
  {
    name: "Preflix",
    link: {pathname: "https://github.com/FreeTonight/Preflix"},
    stack: ["Html", "Css", "React"],
    description: "MY second project hehe"
  },
  {
    name: "Youtube search app",
    link: {pathname: "https://github.com/FreeTonight/Youtube-search"},
    stack: ["Html", "Css", "React"],
    description: "my latest project"
  },
]

function ProjectList() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < project.length; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className="project-wrapper">
          <img
            className="project-img"
            src={`./images/picture-${i + 1}.jpeg`}
            style={{ listStyle: "none" }}
            alt={`Slide ${i + 1}`}
          />
        </div>
        
        <h4 className="project-name">{project[i].name}</h4>
        <p className="project-sub">
          Click <Link className="project-link" to={project[i].link} target="_blank">here</Link> to view code
        </p>
      </SwiperSlide>
    );
  }

  return (
    <div className="project-bg">
      <h2 className="title"> My Projects</h2>
      <React.Fragment>
        <Swiper
          className="swipe"
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setControlledSwiper}
          // onReachEnd={return}
          loop="true"
        >
          {slides}
        </Swiper>
      </React.Fragment>
    </div>
  );
}

export default ProjectList;
