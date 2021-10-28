import { render } from "@testing-library/react";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import "./hero-subtitle.styles.scss";

const HeroSubtitle = () => {
  const el = useRef(null);

  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Husband",
        "Father",
        "Web Developer",
        "Game Developer",
        "Freelancer",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="hero-content">
      <div className="table-cell">
        <div className="container">
          <h1 className="hero-title">I am Adam Kile</h1>
          <p className="hero-subtitle type-wrap">
            <span style={{ whiteSpace: "pre" }} ref={el} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSubtitle;
