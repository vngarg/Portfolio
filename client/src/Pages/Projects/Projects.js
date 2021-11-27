import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "reactstrap";

import "./Projects.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

import GithubIcon from "../../assets/Icons/GitHubFinder.png";
import MovieFinderIcon from "../../assets/Icons/MovieFinder.ico";
import NEWSIcon from "../../assets/Icons/NEWS.webp";
import COVIDIcon from "../../assets/Icons/COVID.png";
import AnugoonjIcon from "../../assets/Icons/Anugoonj.webp";
import CodePlayerIcon from "../../assets/Icons/CodePlayer.png";
import LogsIcon from "../../assets/Icons/Logs.png";

import HTMLIcon from "../../assets/Icons/HTML.png";
import CSSIcon from "../../assets/Icons/CSS.png";
import ReactIcon from "../../assets/Icons/React.webp";
import JavascriptIcon from "../../assets/Icons/JavaScript.svg";
import BootstrapIcon from "../../assets/Icons/Bootstrap.png";
import FlutterIcon from "../../assets/Icons/Flutter.webp";
import DartIcon from "../../assets/Icons/Dart.png";
import AndroidIcon from "../../assets/Icons/Android.png";
import APIicon from "../../assets/Icons/API.jpg";
import JQueryIcon from "../../assets/Icons/JQuery.jpg";
import NodeIcon from "../../assets/Icons/Nodejs.jpeg";
import MongoIcon from "../../assets/Icons/Mongodb.jpeg";

const Projects = () => {
  var GithubFinder = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    ReactIcon,
  ];
  var MovieFinder = [FlutterIcon, DartIcon, AndroidIcon, APIicon];
  var NEWSReader = [DartIcon, AndroidIcon, APIicon, FlutterIcon];
  var CoronaCheck = [DartIcon, APIicon, FlutterIcon, AndroidIcon];
  var Anugoonj = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    NodeIcon,
    MongoIcon,
    JQueryIcon,
  ];
  var CodePlayer = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    JQueryIcon,
    BootstrapIcon,
  ];
  var ITLogger = [ReactIcon, BootstrapIcon, HTMLIcon, JavascriptIcon, CSSIcon];
  var SortingVisualizer = [ReactIcon, JavascriptIcon];

  return (
    <div>
      <Menu color="rgba(25, 26, 29, 1)" />
      <Container>
        <h1 className="mt-5 mb-5">My Projects</h1>
        <Row>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={MovieFinderIcon}
              projectName="Sorting Visualizer"
              description="Applied various sorting techniques using ReactJs & Redux. User will be able to see the current step with the help of different colours used. So, now they can visualize the algorithm easily and will be able to check that which step is being performed."
              projectLink="https://vngarg.github.io/Sorting-Visualizer/"
              emoji1="🎉"
              languages={SortingVisualizer}
            />
          </Col>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={GithubIcon}
              projectName="GitHub Finder"
              description="This is a React application which can be used to search Github accounts of various users. It will list out top 5 repositories of the user and will also show the user details along with the number of followers in the following sections."
              projectLink="https://githubfinder142.netlify.com/"
              emoji1="🔥"
              languages={GithubFinder}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={MovieFinderIcon}
              projectName="Movie Finder"
              description="This application can give you the details of the latest movies. You can also watch their trailers and will also get their cast, IMDB rating along with various other details. It also shows the similar movies for your search."
              projectLink="https://drive.google.com/file/d/1--mQe_Lc0k2NIKHB9kOtd7XS5pfndWbg/view?usp=sharing"
              emoji1="🎉"
              languages={MovieFinder}
            />
          </Col>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectName="Anugoonj'20"
              projectIcon={AnugoonjIcon}
              description="Anugoonj is the annual Cultural Fest of GGSIPU. I had creted the website for the fest along with my team. The website is made using Javascript and HTML/CSS on front-end and Nodejs and Mongodb on back-end"
              emoji1="🎡"
              projectLink="http://anugoonj-ipu.com/"
              languages={Anugoonj}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectName="NEWS Reader"
              projectIcon={NEWSIcon}
              description="Now easily chech the latest NEWS using this android application. You can read the NEWS category wise as well. Install the app and get updated with the NEWS."
              emoji1="📰"
              projectLink="https://drive.google.com/file/d/1OKokk2hfRUfE7Rv_Rz69_cOAznUo48Wh/view"
              languages={NEWSReader}
            />
          </Col>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectName="IT Logger"
              projectIcon={LogsIcon}
              description="This React application allows you to store your records in an optimized way. You can modify or delete them anytime you feel."
              emoji1="🧾"
              projectLink="https://github.com/vngarg/IT-Logger"
              languages={ITLogger}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectName="Corona Checker"
              projectIcon={COVIDIcon}
              description="This android application allows you to check the COVID-19 status of India, number of total and active patients along with the ones who didn't survived this disease. It also provide the details of various other countries. Some precautions and symptoms are listed as well."
              emoji1="🏥"
              projectLink="https://drive.google.com/file/d/1uHog1UkgrJ30IngJ7XgXkebj9-RiC49b/view?usp=sharing"
              languages={CoronaCheck}
            />
          </Col>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectName="CodePlayer"
              projectIcon={CodePlayerIcon}
              description="This is a Codeplayer where you can work with your code and can get the Output side by side. In this you can practice HTML ,CSS and JavaScript code and will get the output at the OutputWindow."
              emoji1="🖥"
              projectLink="https://vngarg.github.io/CodePlayer/"
              languages={CodePlayer}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
