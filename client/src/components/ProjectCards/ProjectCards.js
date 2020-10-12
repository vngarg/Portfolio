import React from "react";
import "./style.css";

import { Container, Row, Col, Button }  from 'reactstrap';

const ProjectCards = (props) => {
  var languages = props.languages.map(logo => {
    return (
      <Col col={2}>
        <img src={logo} className='icon' />
      </Col>
    )
  })

  return (
    <div>
      <Container className='maincontainer'>
        <Row className='row'>
          <Col>
            <img src={props.projectIcon} className='icon' />
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
          {/* <Col col={2}>
            <img src={icon} className='icon' />
          </Col>
          <Col col={2}>
            <img src={icon} className='icon' />
          </Col>
          <Col col={2}>
            <img src={icon} className='icon' />
          </Col>
          <Col col={2}>
            <img src={icon} className='icon' />
          </Col>
          <Col col={2}>
            <img src={icon} className='icon' />
          </Col>
          <Col col={2}>
            <img src={icon} className='icon' />
          </Col> */}
        </Row>
        <a href={props.projectLink} target='_blank'>
        <Button color='primary' className='btn'>View Project</Button>
        </a>
      </Container>
    </div>
  );
};

export default ProjectCards;
