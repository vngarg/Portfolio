import React from 'react'
import Menu from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

import './Projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

import GithubIcon from '../../assets/Icons/GitHubFinder.png';
import MovieFinderIcon from '../../assets/Icons/MovieFinder.ico';
import NEWSIcon from '../../assets/Icons/NEWS.webp';

import HTMLIcon from '../../assets/Icons/HTML.png';
import CSSIcon from '../../assets/Icons/CSS.png'; 
import ReactIcon from '../../assets/Icons/React.webp';
import Javascript from '../../assets/Icons/JavaScript.svg';
import BootstrapIcon from '../../assets/Icons/Bootstrap.png';
import FlutterIcon from '../../assets/Icons/Flutter.webp';
import DartIcon from '../../assets/Icons/Dart.png';
import AndroidIcon from '../../assets/Icons/Android.png';
import APIicon from '../../assets/Icons/API.jpg'; 

const Projects = () => {

    var GithubFinder = [HTMLIcon, CSSIcon, Javascript, BootstrapIcon, ReactIcon];
    var MovieFinder = [FlutterIcon, DartIcon, AndroidIcon, APIicon];
    var NEWSReader = [DartIcon, AndroidIcon, APIicon, FlutterIcon]

    return (
        <div>
            <Menu color='rgba(25, 26, 29, 1)' />
            <Container>
                <h1 className='mt-5 mb-5'>My Projects</h1>
                <Row>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectIcon={GithubIcon} projectName='GitHub Finder' description="This is a React application which can be used to search Github Accounts of various users. It will list out top 5 repositories of the user. It will also show the user details in the following sections." projectLink='https://githubfinder142.netlify.com/' emoji1='🔥' languages={GithubFinder} />
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectIcon={MovieFinderIcon} projectName='Movie Finder' description='For all the movie lovers who find very difficult to search for a movie to watch. No you can easily get all the Latest and Top Movies, watch trailers and also see their cast and IMDB rating all at one place.
                        ' projectLink='https://drive.google.com/file/d/1--mQe_Lc0k2NIKHB9kOtd7XS5pfndWbg/view?usp=sharing' emoji1='🎉' languages={MovieFinder} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectName='Movie Reader' projectIcon={NEWSIcon} description='Here you can easily check the news updates. Also you can check news category wise. Updated many times a day.' emoji1='📰' projectLink='https://drive.google.com/file/d/1OKokk2hfRUfE7Rv_Rz69_cOAznUo48Wh/view' languages={NEWSReader} />
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
                </Row> */}
            </Container>
            <Footer />
        </div>
    )
}

export default Projects
