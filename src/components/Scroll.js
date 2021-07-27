import React from "react";
import { Button } from "./Button";

function Scroll() {
  function handleScroll() {
    window.scroll({
      top: 10000,
      left: 0,
      behavior: "smooth",
    });
    // window.scroll(0, document.body.offsetHeight);
    // to support IE11 and lower
  }

  return (
    <Button
      className="btn"
      buttonStyle="btn--outline"
      buttonSize="btn--large"
      onClick={handleScroll}
    >
      GET STARTED
    </Button>
  );
}

export default Scroll;
