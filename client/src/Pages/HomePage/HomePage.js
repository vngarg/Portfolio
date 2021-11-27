import React, { Component, Fragment } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import Particles from "react-particles-js";
import Menu from "../../components/Nav/Navbar.jsx";

import "./Home.css";
import Skills from "../../components/Skills/Skills.js";
import Shlok from "../../assets/images/Shlok.jpg";
import HomePageProjects from "../../components/HomePageProjects/HomePageProjects";
import Collaboration from "../../components/Collaboration/Collaboration.js";
import Footer from "../../components/Footer/Footer";
import Certification from "../../components/Certifications/Certification.js";

import JP from "../../assets/Logos/JPMorgan.png";
import CN from "../../assets/Logos/COdingNinjas.jpg";
import Coursera from "../../assets/Logos/Coursera.png";
import Preloader from "../../components/Preloader/Preloader.js";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Preloader />
        ) : (
          <div>
            <Fragment>
              <div className="Hero">
                <Menu color="transparent" />
                <Row className="mr-0 mt-4 md:mt-5">
                  <Col xl={6} sm={12} className="text-center ImageDiv">
                    <img src={Shlok} alt="Shlok" className="HeroImage" />
                  </Col>
                  <Col xl={6} sm={12} className="text-left">
                    <div className="Heading">Hey, I'm Shlok Garg.</div>
                    <div className="HeroText">
                      I'm a MERN Stack developer, android developer and a
                      content-creator who works towards providing education to
                      all.
                    </div>
                    <br />
                    <Button className="button">
                      <a
                        className="CV"
                        href="https://drive.google.com/file/d/13Ysty-R8loE1zww6zxBxoOvzm1X4X3EQ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </a>
                    </Button>
                  </Col>
                </Row>
                <Particles
                  className="particles"
                  params={{
                    particles: {
                      number: {
                        value: 130,
                        density: {
                          enable: true,
                          value_area: 1000,
                        },
                      },
                    },
                  }}
                />
              </div>
              <Skills />
              <HomePageProjects />
              <div className="certificateDiv">
                <Container>
                  <center>
                    <h1 style={{ marginBottom: "49px" }}>My Certifications</h1>
                  </center>
                  <Row>
                    <Col lg={4} sm={12} className="column">
                      <Certification
                        Name="JP Morgan Chase & Company"
                        description="During this peroid, I familiarized myself with JPMorgan Chase frameworks and applied my technical skills to a hypothetical request from the firm’s trading floor to analyze and visualize data in a new way. This was really a great learning experience."
                        link="https://drive.google.com/file/d/1OP4ion8X-vJr8v6PRtCofdV9llf0bpeM/view?usp=sharing"
                        logo={JP}
                      />
                    </Col>
                    <Col lg={4} sm={12} className="column">
                      <Certification
                        Name="Front-End Web development with Reactjs"
                        description="Learnt front-end development, with server-side support, for implementing a multi-platform solution. Gained experience in working with React hooks, forms and authentication. Also gained command over Redux and Redux Thunk."
                        logo={Coursera}
                        link="https://drive.google.com/file/d/1r9hrTzVtVaGohY8G6nodyNFw4BxkVXye/view?usp=sharing"
                      />
                    </Col>
                    <Col lg={4} sm={12} className="column">
                      <Certification
                        Name="Competitive Programming using C++"
                        description="Competitive Programming course helped me in enhancing my cognitive and problem-solving abilities. Now I'm able to solve hard coding problems efficiently. I had gained command over various Data Structures and had learnt a lot of Algorithms as well."
                        logo={CN}
                        link="http://files.codingninjas.in/certificate1053383eb2c0c6b86d503e254b0379295140e03.pdf"
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <Collaboration />
              <Footer />
            </Fragment>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Hero;
