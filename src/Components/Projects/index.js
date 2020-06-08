import React from "react";
import "./style.css";


function Projects() {
  return (
    <div>
      <h1 className="titlePage">Portfolio</h1>
      <section>
        <div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Book Mamba</h2>
              <a href="https://omiinaya.github.io/Project1/">
                <img
                  src={require("../../assets/project1.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Neuroscience Quiz</h2>
              <a href="https://keylasan.github.io/neuroQuiz/">
                <img
                  src={require("../../assets//neuro.jpg")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Random Password Generator</h2>
              <a href="https://keylasan.github.io/password/">
                <img
                  src={require("../../assets/passwordGenerator.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Life is Now-Day Planner</h2>
              <a href="https://keylasan.github.io/Day-Planner/">
                <img
                  src={require("../../assets/lifeIsNow.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Eat-Da-Burger</h2>
              <a href="https://mysterious-earth-45336.herokuapp.com/">
                <img
                  src={require("../../assets/burger.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Local One Off</h2>
              <a href="https://local-one-off.herokuapp.com/">
                <img
                  src={require("../../assets/localOneOff.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default Projects;
