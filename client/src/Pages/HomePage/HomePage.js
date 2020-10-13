import React, { Component, Fragment } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import Particles from "react-particles-js";
import Menu from "../../components/Nav/Navbar.jsx";

import "./Home.css";
import Skills from "../../components/Skills/Skills.js";
import { Link } from "react-router-dom";
import Shlok from '../../assets/images/Shlok.jpg';
import HomePageProjects from '../../components/HomePageProjects/HomePageProjects';
import Collaboration from "../../components/Collaboration/Collaboration.js";
import Footer from '../../components/Footer/Footer';
import Certification from "../../components/Certifications/Certification.js";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="Hero">
          <Menu color='transparent' />
          <Row className="mr-0 mt-5">
            <Col xl={6} sm={12} className='text-center ImageDiv'>
                <img src={Shlok} alt="Shlok" className="HeroImage" />
              </Col>
            <Col xl={6} sm={12} className="text-left">
              <div className="Heading">Hey, I'm Shlok Garg.</div>
              <div className="HeroText">
                I'm a MERN Stack developer and an Android developer from New
                Delhi, India. I create appealing websites and Android apps.
              </div>
              <br />
              <Button className="button">
                <Link
                  className="CV"
                  to="../../assets/CV/Shlok's Resume.pdf"
                  target="_blank"
                  download
                >
                  Download CV
                </Link>
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
        <div className='certificateDiv'>
          <Container>
            <center>
              <h1 style={{ 'marginBottom': '49px' }}>My Certifications</h1>
            </center>
            <Row>
              <Col lg={4} sm={12}>
                <Certification />
              </Col>
              <Col lg={4} sm={12}>
                <Certification />
              </Col>
              <Col lg={4} sm={12}>
                <Certification />
              </Col>
            </Row>
          </Container>
        </div>
        <Collaboration />
        <Footer />
      </Fragment>
    );
  }
}

export default Hero;
