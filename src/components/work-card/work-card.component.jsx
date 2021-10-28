import React from "react";

import "./work-card.styles.scss";

const WorkCard = () => {
  return (
    <div className="work-box image">
      <a
        href="https://adams-brain.herokuapp.com/"
        data-gallery="portfolioGallery"
        className="portfolio-lightbox"
      >
        <div className="work-img">
          <img
            src={"https://i.ibb.co/xJS0T3Y/camo-vest.png"}
            alt=""
            className="img-fluid"
          />
        </div>
      </a>
      <div className="work-content">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="w-title">Face Recognition</h2>
            <div className="w-more">
              <span className="w-ctegory">Full Stack</span>/{" "}
              <span className="w-date">20 Jan. 2021</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="w-like">
              <a
                href="https://adams-brain.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-plus-circle"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
