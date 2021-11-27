import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import LinkedIn from "../../assets/Icons/LinkedIn.png";
import Github from "../../assets/Icons/Github.png";
import YouTube from "../../assets/Icons/YouTube.png";
import Gmail from "../../assets/Icons/Gmail.png";
import Insta from "../../assets/Icons/Instagram.jpeg";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="pt-5 pb-3">
          <Col lg={3}>
            <div className="name mb-3">S.G.</div>
            <div className="desc">
              I'm a MERN Stack developer and an Android developer. A
              content-creator who works towards providing education to all.
            </div>
            <br />
            <div className="contact">
              <a href="tel:8307747802">+91-8307747802</a>
              <br />
              <a href="emailto:sngargrsd@gmail.com">sngargrsd@gmail.com</a>
            </div>
          </Col>
          <Col lg={3}>
            <div className="head">Quick Links</div>
            <ul>
              <li>
                <Link to="/Portfolio">About Me</Link>
              </li>
              <li>
                <Link to="/Experience">Experience</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Me</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className="head">Online Platforms</div>
            <ul>
              <li>
                <a
                  href="https://auth.geeksforgeeks.org/user/shlokgarg/practice/"
                  target="_blank"
                  alt="Geeks for Geeks"
                  rel="noopener noreferrer"
                >
                  Geeks for Geeks
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/users/s_g_01"
                  target="_blank"
                  alt="Codechef"
                  rel="noopener noreferrer"
                >
                  Codechef
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/S_G_01"
                  target="_blank"
                  alt="HackerRank"
                  rel="noopener noreferrer"
                >
                  HackerRank
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className="head">Get In Touch</div>
            <ul className="SocialList">
              <li>
                <a
                  href="https://sgcodes.tech/youtube"
                  rel="noopener noreferrer"
                >
                  <img src={YouTube} alt="Youtube" className="SocialMedia" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shlok-garg-0b216b191/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedIn} alt="LinkedIn" className="SocialMedia" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vngarg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="GitHub" className="SocialMedia" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sngargrsd@gmail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Gmail} alt="Gmail" className="SocialMedia" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sg_3105/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Insta}
                    alt="Instagram"
                    className="SocialMedia Insta"
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col className="text-center">
            Made with{" "}
            <span role="img" aria-label="Heart Emoji">
              ❤️
            </span>{" "}
            Shlok Garg
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
