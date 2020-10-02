import React, { Component, Fragment } from "react";
import { Row, Col, Button } from "reactstrap";
import Particles from "react-particles-js";
import Menu from '../Nav/Navbar.jsx'; 

import "./Hero.css";
import Skills from "../Skills/Skills.js";
// import Shlok from "../../assets/images/Shlok.jpg";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="Hero">
          <Menu />
            <Row className="m-0">
              {/* <Col xl={6} sm={12} className='text-center ImageDiv'>
                <img src={Shlok} alt="Shlok" className="HeroImage" />
              </Col> */}
              <Col xl={6} sm={12} className="text-left">
                <div className="Heading">Hey, I'm Shlok Garg.</div>
                <div className="HeroText">
                  I'm a MERN Stack developer and an Android developer from New
                  Delhi, India. I create appealing websites and Android apps.
                </div>
                <br />
                <Button className="button">My Projects</Button>
              </Col>
            </Row>
            <Particles className='particles'
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
        <Skills /><br /><br />
      </Fragment>
    );
  }
}

export default Hero;
