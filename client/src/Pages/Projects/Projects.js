import React from 'react'
import Menu from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

import './Projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

import HTMLIcon from '../../assets/Icons/HTML.png';
import CSSIcon from '../../assets/Icons/CSS.png'; 
import ReactIcon from '../../assets/Icons/React.webp';
import Javascript from '../../assets/Icons/JavaScript.svg';
import Github from '../../assets/Icons/GitHubFinder.png';
import BootstrapIcon from '../../assets/Icons/Bootstrap.png';

const Projects = () => {

    var GithubFinder = [HTMLIcon, CSSIcon, Javascript, BootstrapIcon, ReactIcon];

    return (
        <div>
            <Menu color='rgba(25, 26, 29, 1)' />
            <Container>
                <h1 className='mt-5 mb-5'>My Projects</h1>
                <Row>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectIcon={Github} projectName='GitHub Finder' description="This is a React application which can be used to search Github Accounts of various users. It will list out top 5 repositories of the user. It will also show the user details in the following sections." projectLink='https://githubfinder142.netlify.com/' emoji1='🔥' languages={GithubFinder} />
                    </Col>
                    {/* <Col lg={6} sm={12}>
                        <ProjectCards />
                    </Col> */}
                </Row>
                {/* <Row>
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
                </Row> */}
            </Container>
            <Footer />
        </div>
    )
}

export default Projects
