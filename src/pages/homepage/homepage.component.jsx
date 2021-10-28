import React from "react";

import Hero from "../../components/hero/hero.component";
import Main from "../../components/main/main.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div classname="home-page">
    <Hero />
    <Main id="main" />
  </div>
);

export default HomePage;
