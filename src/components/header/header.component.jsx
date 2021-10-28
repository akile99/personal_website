import React from "react";

import Navigation from "../../components/navigation/navigation.component";

import "./header.styles.scss";

const Header = () => (
  <div id="header" className="fixed-top header-scrolled">
    <div className="container header">
      <h1 className="logo">
        <a href="/">Adam Kile</a>
      </h1>
      <Navigation />
    </div>
  </div>
);

export default Header;
