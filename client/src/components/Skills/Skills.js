import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../assets/Icons/TestLogo.png";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="mainDiv">
      <Container>
        <Row className="text-center">
          <Col lg={4} sm={12} className="SkillColumn col1">
            <img src={Logo} alt="Web developer Logo" className="Logo" />
            <div className="heading">Full Stack Developer</div>
            <div className="description">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div className="subHeading">Languages I speak</div>
            <div className="languages">
              HTML, CSS, Javascript, Bootstrap, Nodejs, Reactjs, Mongodb, JQuery
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
            <img src={Logo} alt="Web developer Logo" className="Logo" />
            <div className="heading">Android Developer</div>
            <div className="description">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div className="subHeading">Languagaes I speak</div>
            <div className="languages">Flutter, Dart, Google Firebase</div>
            <div className="subHeading">Android Tools</div>
            <div className="tools">
                Google Console<br />
                Android Studio<br />
            </div>
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col3">
            <img src={Logo} alt="Web developer Logo" className="Logo" />
            <div className="heading">Competetive Programmer</div>
            <div className="description">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div className="subHeading">Languagaes I speak</div>
            <div className="languages">C, C++, Java</div>
            <div className="subHeading">Programmer Tools</div>
            <div className="tools">
                Visual Studio Code<br />
                Codechef<br />
                HackerEarth<br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
