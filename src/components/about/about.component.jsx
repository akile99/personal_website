import React from "react";

import "./about.styles.scss";

const About = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p>
                      <span className="title-s">Name: </span>{" "}
                      <span>Adam Kile</span>
                    </p>
                    <p>
                      <span className="title-s">Profile: </span>{" "}
                      <span>full stack developer</span>
                    </p>
                    <p>
                      <span className="title-s">Email: </span>{" "}
                      <span>akile99@gmail.com</span>
                    </p>
                    <p>
                      <span className="title-s">Phone: </span>{" "}
                      <span>(810) 223*5935</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Skill</p>
                <span>HTML</span> <span className="pull-right">85%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>CSS</span> <span className="pull-right">75%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>SQL</span> <span className="pull-right">70%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span>React</span> <span className="pull-right">80%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">About me</h5>
                </div>
                <p className="lead">
                  I’ve always enjoyed problem-solving. From a young age, I would
                  tear things apart to learn how they function. I enjoy
                  programming because this allows me to problem solve and build
                  amazing applications.
                </p>
                <p className="lead">
                  I have a passion for helping people. One of my mentors told me
                  early on to find something that will help people and then find
                  a way to make money doing that thing. When you are able to
                  join multiple passions into one goal your drive becomes
                  powerful to succeed.
                </p>
                <p className="lead">
                  Programming allows me to help people reach their goals by
                  giving them the tools to make their jobs better. This might be
                  giving them decision-making tools with business data. This
                  might be automating a task that is repetitive. I feel
                  confident that I can help anyone find a better solution with
                  code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
