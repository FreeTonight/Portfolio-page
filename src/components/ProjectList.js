import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import { useState } from "react";
import "./ProjectList.css";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function ProjectList() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          className="project-img"
          src={`./images/picture-${i + 1}.jpeg`}
          style={{ listStyle: "none" }}
          alt={`Slide ${i + 1}`}
        />
        <h4 className="project-name">Project {i + 1}</h4>
        <p className="project-sub">
          Click <Link className="project-link">here</Link> to view code
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
