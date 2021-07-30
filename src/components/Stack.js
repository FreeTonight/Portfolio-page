import React from "react";
import "./Stack.css";

const stack = [
  {
    name: "Html",
    icon: "fab fa-html5",
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
  },
  {
    name: "Javascript",
    icon: "fab fa-js-square",
  },
  {
    name: "React",
    icon: "fab fa-react",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
  },
];

function Stack() {
  const stacklist = [];
  for (let i = 0; i < stack.length; i += 1) {
    stacklist.push(
      <div className="stacks-container">
        <ul className="stacks-list">
          <li key={stack[i].name} className="stacks">
            <div className="tooltip">{stack[i].name}</div>
            <span><i className={stack[i].icon}></i></span>
          </li>
        </ul>
      </div>
    );
  }
  return stacklist;
}
export default Stack;
