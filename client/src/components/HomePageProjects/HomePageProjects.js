import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ProjectCards from "../ProjectCards/ProjectCards";
import { Link } from "react-router-dom";

import GithubIcon from "../../assets/Icons/GitHubFinder.png";
import MovieFinderIcon from "../../assets/Icons/MovieFinder.ico";

import HTMLIcon from "../../assets/Icons/HTML.png";
import CSSIcon from "../../assets/Icons/CSS.png";
import ReactIcon from "../../assets/Icons/React.webp";
import JavascriptIcon from "../../assets/Icons/JavaScript.svg";
import BootstrapIcon from "../../assets/Icons/Bootstrap.png";
import FlutterIcon from "../../assets/Icons/Flutter.webp";
import DartIcon from "../../assets/Icons/Dart.png";
import AndroidIcon from "../../assets/Icons/Android.png";
import APIicon from "../../assets/Icons/API.jpg";

import "./style.css";

const HomePageProjects = () => {
  var GithubFinder = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    ReactIcon,
  ];
  var MovieFinder = [FlutterIcon, DartIcon, AndroidIcon, APIicon];

  return (
    <div>
      <Container>
        <center>
          <h1 style={{ 'marginBottom': '46px' }}>My Projects</h1>
        </center>
        <Row>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={GithubIcon}
              projectName="GitHub Finder"
              description="This is a React application which can be used to search Github Accounts of various users. It will list out top 5 repositories of the user. It will also show the user details in the following sections."
              projectLink="https://githubfinder142.netlify.com/"
              emoji1="🔥"
              languages={GithubFinder}
            />
          </Col>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={MovieFinderIcon}
              projectName="Movie Finder"
              description="For all the movie lovers who find very difficult to search for a movie to watch. No you can easily get all the Latest and Top Movies, watch trailers and also see their cast and IMDB rating all at one place."
              projectLink="https://drive.google.com/file/d/1--mQe_Lc0k2NIKHB9kOtd7XS5pfndWbg/view?usp=sharing"
              emoji1="🎉"
              languages={MovieFinder}
            />
          </Col>
        </Row>
        <center>
          <Link to="/Projects">
            <Button color="primary" className='MoreButton'>
              More Projects
            </Button>
          </Link>
        </center>
      </Container>
    </div>
  );
};

export default HomePageProjects;
