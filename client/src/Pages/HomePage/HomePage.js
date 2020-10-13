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

import JP from '../../assets/Logos/JPMorgan.png';
import CN from '../../assets/Logos/COdingNinjas.jpg';
import Coursera from '../../assets/Logos/Coursera.png';

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
              <Col lg={4} sm={12} className='column'>
                <Certification Name='JP Morgan Chase & Company' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." link='https://drive.google.com/file/d/1OP4ion8X-vJr8v6PRtCofdV9llf0bpeM/view?usp=sharing' logo={JP} />
              </Col>
              <Col lg={4} sm={12} className='column'>
                <Certification Name='Front-End Web development with Reactjs' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." logo={Coursera} link='https://drive.google.com/file/d/1r9hrTzVtVaGohY8G6nodyNFw4BxkVXye/view?usp=sharing' />
              </Col>
              <Col lg={4} sm={12} className='column'>
                <Certification Name='Competitive Programming using C++' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." logo={CN} link='http://files.codingninjas.in/certificate1053383eb2c0c6b86d503e254b0379295140e03.pdf' />
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
