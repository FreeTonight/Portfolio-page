import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__container">
          <figure className="cards__item__pic__wrap">
            {/* image tag
            data-category={[props.label]} */}
            <img className="cards__item__img" alt="" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h3 className="cards__item__title">{props.title}</h3>
            <p className="cards__item__text">{props.text}</p>
          </div>

          {/* <Link to={props.path} target="_blank">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--small"
              onclick={props.open}
            >
              {props.action}
            </Button>
          </Link> */}

          {/* {this.props.notClickable ? (
            <Link
              to={props.path}
              className="disabledCursor"
              onClick={(event) => event.preventDefault()}
            >
              {props.action}
            </Link>
          ) : (
            <Link to={props.path} className="notDisabled">
              <Button buttonStyle="btn--primary" buttonSize="btn--small">
                {props.action}
              </Button>
            </Link>
          )} */}
        </div>
      </li>
    </>
  );
}

export default CardItem;
