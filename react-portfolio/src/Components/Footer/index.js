import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
   
   <div className="center">
      <footer className="footer">
      <Container fluid={true}>
        <p>&copy; Copyright 2020, K.S</p>
      </Container>
    </footer>
   </div>

  );
}
export default Footer;
