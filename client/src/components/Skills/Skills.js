import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../assets/Icons/TestLogo.png";

import "./Skills.css";

const Skills = () => {
  return (
    <div className='mainDiv'>
      <Container>
        <Row className="text-center">
          <Col lg={4} sm={12} className="SkillColumn col1">
            <img src={Logo} alt="Web developer Logo" className="Logo" />
            <div className='heading'>
                Full Stack Developer
            </div>
            <div className='description'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </div>
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col2">
            <img src={Logo} alt="Web developer Logo" className="Logo" />
            <div className='heading'>
                Android Developer
            </div>
            <div className='description'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </div>
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col3">
            <img src={Logo} alt="Web developer Logo" className="Logo" />
            <div className='heading'>
                Competetive Programmer
            </div>
            <div className='description'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
