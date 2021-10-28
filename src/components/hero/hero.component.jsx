import React from "react";

import background from "../../assets/img/hero-bg.jpeg";

import "./hero.styles.scss";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="overlay-itro"></div>
      <div className="hero-content">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title">I am Adam Kile</h1>
            <p className="hero-subtitle">
              <span
                className="typed"
                data-typed-items=",Husband, Father, Web Developer, Game Developer, Freelancer"
              ></span>
              <span className="typed-cursor"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
