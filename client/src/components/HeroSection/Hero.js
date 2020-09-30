import React, { Component, Fragment } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import Particles from "react-particles-js";

import "./Hero.css";
import Shlok from "../../assets/images/Shlok.jpg";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="Hero">
          <Container>
            <Row className="m-0">
              <Col xl={6} sm={12}>
                <img src={Shlok} alt="Shlok" className="HeroImage" />
              </Col>
              <Col xl={6} sm={12} className="text-left">
                <div className="Heading">Hey, I'm Shlok Garg.</div>
                <div className="HeroText">
                  A MERN Stack developer and an Android developer from New
                  Delhi, India. I create appealing websites and Android apps.
                </div>
                <br />
                <Button className="button">My Projects</Button>
              </Col>
            </Row>
          </Container>
          <Particles className='particles'
          width='98.5vw'
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
      </Fragment>
    );
  }
}

export default Hero;
