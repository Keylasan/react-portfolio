import React from "react";
import "./style.css";

function About() {
  return (
    <div>
      <h1 className="name">Keyla Santoyo</h1>
      <br></br>
      <section>
        <div className="container-about">
          <center>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <img
                className="pic"
                src={require("../../images/keylaBack.jpg")}
                alt=""
              />
            </div>

            <p className="heading">get to know me</p>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="container-text aboutme">
                <p>
                  Hello everyone! I am a future web developer and currently a
                  student of the craft. I was born and raised in the rural parts
                  of Cuba, so it's safe to say I often miss the outdoors and the
                  farm life. Currently, I live in Miami, Florida, and I'm
                  incredibly grateful to be near the ocean! I love to busy
                  myself out in the water with a paddle board early mornings or
                  at the mechanical wake park - practicing new wakeboarding
                  tricks. Often, you'll find me teaching myself foreign
                  languages; the world fascinates me, and I want to communicate
                  with as many people from different cultures as I possibly can.
                  I still don't know which programming languages are my
                  favorite, but the most interesting spoken languages to me
                  (aside my native tongue - Spanish) are Norwegian, German, and
                  French. As I mentioned, I'm completely new to (and excited
                  about) the tech world. This field interests me because it's an
                  incredible platform to create connection with people and
                  express my creativity. Plus, I'm ready to welcome programming
                  languages into my life as well. Wish me luck, and let's have
                  fun! Ha det bra!
                </p>
              </div>
            </div>
          </center>
        </div>
      </section>
      <section>
        <div className="img">
          <div className="row">
            <div className="col-12"></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
