import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Keyla Santoyo",

      navLinks: [
        { title: "About", path: "/" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        tittle: "portfolio",
        subtitle: "Check Out My Latest Projects",
      },
      about: {
        title: "Keyla Santoyo",
        subtitle: "Get To Know Me",
      },
      contact: {
        title: "Let's Create Something Together",
      },
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Container className="p-0" fluid={true}>
            <Navbar classname="border-bottom" bg="transparent" expand="lg">
              
              <Navbar.Toggle aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle"></Navbar.Collapse>
            </Navbar>
           <div className="pageContainer">
           <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />

            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            
           </div>
           
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
