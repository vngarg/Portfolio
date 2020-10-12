import React from "react";
import "./style.css";

import icon from '../../assets/Icons/TestLogo.png';

import { Container, Row, Col, Button }  from 'reactstrap';

const ProjectCards = () => {

  return (
    <div>
      <Container className='maincontainer'>
        <Row className='row'>
          <Col>
            <img src={icon} className='icon' />
            <font className='projectName'>Project Name</font>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Col>
        </Row>
        <Row className='row'>
          <Col className='tech'>
            Technology used
          </Col>
        </Row>
        <Row className='row'>
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
          </Col>
          <Col col={2}>
            <img src={icon} className='icon' />
          </Col>
        </Row>
        <Button className='btn'>View Project</Button>
      </Container>
    </div>
  );
};

export default ProjectCards;
