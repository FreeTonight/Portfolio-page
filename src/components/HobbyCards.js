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
              src="images/football.jpeg"
              title="Football"
              text="I've been playing football since I was a kid. I played intensively during my teenage years. Despite not playing much lately, I still follow the sport closely."
            />

            <CardItem
              src="images/rock-climbing.jpeg"
              title="Rock Climbing"
              text="I recently started after watching 'Free Solo' - a documentary about rock climbing. It's been over a month and I enjoy it very much."
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/LoL.jpeg"
              title="League of Legends"
              text="I've been playing this game for almost a decade. I tried to quit multiple times, I failed everytime."
            />
            <CardItem
              src="images/CoC.jpeg"
              title="Clash of Clans"
              text="Mobile game that I have also been playing for almost a decade. However, this game doesn't drive me crazy."
            />
            <CardItem
              src="images/hiking.jpeg"
              title="Hiking"
              text="I enjoy being in the nature. Every hikes I went have been wonderful and memorable."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HobbyCards;
