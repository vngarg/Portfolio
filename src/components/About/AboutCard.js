import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shlok Garg </span>
            from <span className="purple"> New Delhi, India.</span>
            <br /> I am a Software Developer with more than 3 years of experience working with various startups and MNC's.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Create. Inspire. Repeat!"{" "}
          </p>
          <footer className="blockquote-footer">Shlok</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
