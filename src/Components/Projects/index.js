import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1 className="title">Portfolio</h1>
      <section>
        <div className="projectsContainer">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <Link to="https://omiinaya.github.io/Project1/"></Link>

              <h2 className="title">Book Manba</h2>
              <img
                src={require("../../assets/project1.png")}
                height="200px"
                width="200px"
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-4">
              <Link to="https://keylasan.github.io/neuroQuiz/"></Link>
              <article className="project">
                <h2 className="title">Neuroscience Quiz</h2>
                <img
                  src={require("../../assets//neuro.jpg")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </article>
            </div>
            <div className="col-lg-3 col-md-4">
              <Link to="https://keylasan.github.io/password/"></Link>
              <article className="project">
                <h2 className="title">Random Password Generator</h2>
                <img
                  src={require("../../assets/passwordGenerator.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </article>
            </div>
            <div className="col-lg-3 col-md-4">
              <Link to="https://keylasan.github.io/Day-Planner/"></Link>
              <article className="project">
                <h2 className="title">Life is Now-Day Planner</h2>
                <img
                  src={require("../../assets/lifeIsNow.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </article>
            </div>

            <div className="col-lg-3 col-md-4">
              <Link to="https://pumpkin-cupcake-73234.herokuapp.com/"></Link>
              <article className="project">
                <h2 className="title">Eat-Da-Burger</h2>
                <img
                  src={require("../../assets/burger.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </article>
            </div>

            <div className="col-lg-3 col-md-4">
              <Link to="https://local-one-off.herokuapp.com/"></Link>
              <article className="project">
                <h2 className="title">Local One Off</h2>
                <img
                  src={require("../../assets/localOneOff.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </article>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default Projects;
