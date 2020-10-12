import React from "react";
import "./style.css";

import { Container, Row, Col, Button }  from 'reactstrap';

const ProjectCards = (props) => {
  var languages = props.languages.map(logo => {
    return (
      <Col col={2}>
        <img src={logo} className='icon' alt='Language' />
      </Col>
    )
  })

  return (
    <div>
      <Container className='maincontainer'>
        <Row className='row'>
          <Col>
            <img src={props.projectIcon} className='icon' alt='Project Logo' />
            <font className='projectName'>{props.projectName}</font>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
          {props.emoji1}{' '}{props.description}
          </Col>
        </Row>
        <Row className='row'>
          {languages}
        </Row>
        <a href={props.projectLink} target='_blank' rel="noopener noreferrer">
        <Button color='primary' className='btn'>View Project</Button>
        </a>
      </Container>
    </div>
  );
};

export default ProjectCards;
