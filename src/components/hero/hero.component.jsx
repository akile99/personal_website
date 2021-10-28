import React from "react";

import background from "../../assets/img/hero-bg.jpeg";
import HeroSubtitle from "../hero-subtitle/hero-subtitle.component";

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
      <HeroSubtitle />
    </div>
  );
};

export default Hero;
