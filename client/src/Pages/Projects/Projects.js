import React from 'react'
import Menu from '../../components/Nav/Navbar';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';

import './Projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

import GithubIcon from '../../assets/Icons/GitHubFinder.png';
import MovieFinderIcon from '../../assets/Icons/MovieFinder.ico';
import NEWSIcon from '../../assets/Icons/NEWS.webp';
import COVIDIcon from '../../assets/Icons/COVID.png';
import AnugoonjIcon from '../../assets/Icons/Anugoonj.webp';
import CodePlayerIcon from '../../assets/Icons/CodePlayer.png';
import LogsIcon from '../../assets/Icons/Logs.png'; 
import Game from '../../assets/Icons/Game.png';

import HTMLIcon from '../../assets/Icons/HTML.png';
import CSSIcon from '../../assets/Icons/CSS.png'; 
import ReactIcon from '../../assets/Icons/React.webp';
import JavascriptIcon from '../../assets/Icons/JavaScript.svg';
import BootstrapIcon from '../../assets/Icons/Bootstrap.png';
import FlutterIcon from '../../assets/Icons/Flutter.webp';
import DartIcon from '../../assets/Icons/Dart.png';
import AndroidIcon from '../../assets/Icons/Android.png';
import APIicon from '../../assets/Icons/API.jpg'; 
import JQueryIcon from '../../assets/Icons/JQuery.jpg';
import NodeIcon from '../../assets/Icons/Nodejs.jpeg';
import MongoIcon from '../../assets/Icons/Mongo.jpg';

const Projects = () => {

    var GithubFinder = [HTMLIcon, CSSIcon, JavascriptIcon, BootstrapIcon, ReactIcon];
    var MovieFinder = [FlutterIcon, DartIcon, AndroidIcon, APIicon];
    var NEWSReader = [DartIcon, AndroidIcon, APIicon, FlutterIcon];
    var CoronaCheck = [DartIcon, APIicon, FlutterIcon, AndroidIcon];
    var Anugoonj = [HTMLIcon, CSSIcon, JavascriptIcon, BootstrapIcon, NodeIcon, MongoIcon, JQueryIcon];
    var CodePlayer = [HTMLIcon, CSSIcon, JavascriptIcon, JQueryIcon, BootstrapIcon];
    var ITLogger = [ReactIcon, BootstrapIcon, HTMLIcon, JavascriptIcon, CSSIcon];
    var JavascriptGame = [HTMLIcon, CSSIcon, JavascriptIcon, BootstrapIcon];

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
                    <ProjectCards projectName="Anugoonj'20" projectIcon={AnugoonjIcon} description='Anugoonj, which translates to “Echoing of small efforts”, is the monumental annual cultural festival of GGSIPU which takes place in February. Captivating all creative thoroughbreds from more than 100 affiliated colleges' emoji1='🎡' projectLink='http://anugoonj-ipu.com/' languages={Anugoonj} />
                        
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectName='Corona Checker' projectIcon={COVIDIcon} description='Now easily check the corona updates on this app. Get Country Details.' emoji1='🏥' projectLink='https://drive.google.com/file/d/1uHog1UkgrJ30IngJ7XgXkebj9-RiC49b/view?usp=sharing' languages={CoronaCheck} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12}>
                    <ProjectCards projectName='NEWS Reader' projectIcon={NEWSIcon} description='Here you can easily check the news updates. Also you can check news category wise. Updated many times a day.' emoji1='📰' projectLink='https://drive.google.com/file/d/1OKokk2hfRUfE7Rv_Rz69_cOAznUo48Wh/view' languages={NEWSReader} />
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectName="IT Logger" projectIcon={LogsIcon} description='Store your records easily using this IT Logger. You can easiy delete, modify and create a new record.' emoji1='🧾' projectLink='https://github.com/vngarg/IT-Logger' languages={ITLogger} />
                    </Col>
                </Row>
                <Row>
                <Col lg={6} sm={12}>
                        <ProjectCards projectName='CodePlayer' projectIcon={CodePlayerIcon} description='This is a CodePlayer where you can work with your code and can get the Output side by side. In this you can practice HTML ,CSS and JavaScript code and will get the output at the OutputWindow.' emoji1='🖥' projectLink='https://vngarg.github.io/CodePlayer/' languages={CodePlayer} />
                    </Col>
                    <Col lg={6} sm={12}>
                        <ProjectCards projectName='Breakout Game' projectIcon={Game} description='We all have played this game in our childhood. So this is my version of the game. Although this is very simple, still it required full attenetion. So go and play the game.' emoji1='🎮' projectLink='https://vngarg.github.io/BrekOut-Game/' languages={JavascriptGame} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects
