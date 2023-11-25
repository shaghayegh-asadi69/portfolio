import React from "react";

const ScrolDown = () => {
  return (
    <div className="scroll__down">
      <a href="#portfolio" className="mouse__wrapper">
        <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrolDown;