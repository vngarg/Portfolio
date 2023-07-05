import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CineQuest: The Movie Seeker"
              description="CineQuest: The Movie Seeker is your ultimate companion for discovering the perfect films. With a vast collection of movies at your fingertips, effortlessly search, explore, and uncover hidden cinematic gems. Find personalized recommendations, browse genres, read reviews, and track your watchlist. Let your movie journey begin with CineQuest!"
              ghLink="https://github.com/vngarg/Movie-Finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SortSpectra: Visualizing Sorting Algorithms"
              description="SortSpectra is an immersive sorting visualizer project that brings sorting algorithms to life. Witness the mesmerizing dance of data as various sorting techniques unfold before your eyes. Dive into a captivating journey of sorting visualization, gain insights, and enhance your understanding of these fundamental algorithms. Explore the beauty of sorting with SortSpectra!"
              ghLink="https://github.com/vngarg/Sorting-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ConnectNow"
              description="ConnectNow is a cutting-edge project that brings powerful online communication tools to your fingertips. Seamlessly host virtual meetings, collaborate with colleagues, and engage in real-time video conferencing. Enjoy high-quality audio and video, chat features, and more, all in one user-friendly platform. Experience the future of online meetings with ConnectNow."
              ghLink="https://github.com/vngarg/Let-s-Meet"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NewsPulse"
              description="NewsPulse is your go-to news app, delivering the latest headlines and stories from around the globe. Stay informed and up-to-date with a personalized news feed tailored to your interests. Dive into diverse topics, explore breaking news, and access in-depth articles. Experience a seamless and immersive news reading experience with NewsPulse."
              ghLink="https://github.com/SG-Codes/React-Native-NEWS-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// TODO:SHLOK - Change logo in title bar