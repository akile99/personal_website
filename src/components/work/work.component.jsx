import React from "react";

import WorkCard from "../work-card/work-card.component";
import WorkHeading from "../work-heading/work-heading.component";

import "./work.styles.scss";

const Work = () => (
  <div class="container">
    <WorkHeading />
    <div class="row">
      <div class="col-md-4">
        <WorkCard />
      </div>
    </div>
  </div>
);

export default Work;
