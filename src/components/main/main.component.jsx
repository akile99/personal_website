import React from "react";

import About from "../about/about.component";
import Work from "../work/work.component";

import "./main.styles.scss";

const Main = () => (
  <div>
    <section id="about" className="about-mf sect-pt4 route">
      <About />
    </section>
    <section id="work" class="portfolio-mf sect-pt4 route">
      <Work />
    </section>
  </div>
);

export default Main;
