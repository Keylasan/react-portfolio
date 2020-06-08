import React from "react";
import "./style.css";

function Contact() {
  return (
    <div class="container">
      <h1 className="lets">Let's Create</h1>
      <h2 className="something">something</h2>
      <h3 className="together">together</h3>
      <div className="contact-me">
        <div className="inputs">
          <input
            type="text"
            class="first"
            name="name"
            placeholder="Name"
          ></input>
          <input
            type="text"
            class="first"
            name="email"
            placeholder="Email"
          ></input>
          <input type="text" class="message" placeholder="Message"></input>
          <button className="button" >
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
