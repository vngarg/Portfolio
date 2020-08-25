import React from 'react'
import Menu from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

import './Projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

import TestIcon from '../../assets/Icons/TestLogo.png';
import HTML from '../../assets/Icons/HTML.png';

const Projects = () => {
    return (
        <div>
            <Menu color='rgba(25, 26, 29, 1)' />
            <Container>
                <h1 className='mt-5 mb-5'>My Projects</h1>
                <Row>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectIcon={TestIcon} projectName='GitHub Finder' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." projectLink='https://githubfinder142.netlify.com/' emoji1='🔥' Logo={HTML} />
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        <ProjectCards />
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        <ProjectCards />
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects
