import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Skills.css";
import FullStack from '../../assets/images/FullStack.png';
import Android from '../../assets/images/Android.jpg';
import CP from '../../assets/images/CP.jpg';

const Skills = () => {
  return (
    <div className="mainDiv mb-5">
      <Container>
        <Row className="text-center">
          <Col lg={4} sm={12} className="SkillColumn col1">
          <div className='inDiv'>
            <img src={FullStack} alt="Web developer Logo" className="ImgLogo" />
            </div>
            <div className="heading">Full Stack Developer</div>
            <div className="description">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div className="subHeading">Languages I speak</div>
            <div className="languages">
              HTML, CSS, Javascript, Bootstrap, Nodejs, Reactjs, Mongodb, JQuery, WordPress, Docker
            </div>
            <div className="subHeading">Dev Tools</div>
            <div className="tools">
              Visual Studio Code
              <br />
              Terminal
              <br />
              Github
              <br />
              Codepen
            </div>
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col2">
          <div className='inDiv'>
            <img src={Android} style={{ 'height': '280px' }} alt="Web developer Logo" className="ImgLogo" />
            </div>
            <div className="heading">Android Developer</div>
            <div className="description">
            Innovative Android Developer with great experience of developing and maintaining Android applications
            </div>
            <div className="subHeading">Languagaes I speak</div>
            <div className="languages">Flutter, Dart, Google Firebase</div>
            <div className="subHeading">Android Tools</div>
            <div className="tools">
              Google Console
              <br />
              Android Studio
              <br />
              StackoverFlow
            </div>
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col3">
            <div className='inDiv'>
            <img src={CP} alt="Web developer Logo" className="ImgLogo" />
            </div>
            <div className="heading">Competetive Programmer</div>
            <div className="description">
              A creative thinker, adept in software development and various data structures.
            </div>
            <div className="subHeading">Languagaes I speak</div>
            <div className="languages">C, C++, Java</div>
            <div className="subHeading">Programmer Tools</div>
            <div className="tools">
              Visual Studio Code
              <br />
              Codechef
              <br />
              Geeks For Geeks
              <br />
              HackerEarth
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
