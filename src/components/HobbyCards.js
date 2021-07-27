import React from "react";
import "./HobbyCards.css";
import CardItem from "./CardItem";
// import { Link } from 'react-router-dom';

function HobbyCards() {
  return (
    <div className="cards">
      <h2 className="title">My hobby</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpeg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />

            <CardItem
              src="images/img-1.jpeg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpeg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <CardItem
              src="images/img-1.jpeg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <CardItem
              src="images/img-1.jpeg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HobbyCards;
