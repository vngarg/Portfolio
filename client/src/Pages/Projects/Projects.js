import React from 'react'
import Menu from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

import './Projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

const Projects = () => {
    return (
        <div>
            <Menu color='rgba(25, 26, 29, 1)' />
            <Container>
                <h1 className='mt-5 mb-5'>My Projects</h1>
                <Row>
                    <Col lg={4} sm={12}>
                        <ProjectCards />
                    </Col>
                    <Col lg={4} sm={12}>
                        <ProjectCards />
                    </Col>
                    <Col lg={4} sm={12}>
                        <ProjectCards />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects
