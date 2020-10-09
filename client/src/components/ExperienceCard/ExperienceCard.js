import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";

// animations
import Flip from 'react-reveal/Flip';
import Aos from 'aos';
import 'aos/dist/aos.css';

// css
import "./cards.css";

const ExperienceCard = (props) => {
    useEffect(() => {
        Aos.init();
    })
    
    const certificate = () => {
        if(props.CredentialLink !== 'null') {
            return <a
            href={props.CredentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="credential"
          >
            See the Certificate
          </a>
        }
    }

  return (
    <div>
      <Row className='row'>
        <Col xl={6} sm={12}>
          <div className="position">
            <Flip cascade>
            {props.position}
            </Flip>
            </div>
        </Col>
        <Col data-aos="fade-up"
        data-aos-duration='500'
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" xl={6} sm={12}>
          <div className="CompanyName">
            <img src={props.Logo} alt="Gordian Technologies" className="Logo" />
            {props.CompanyName}
          </div>
          <div className="duration">
            {props.start} - {props.end}, {props.duration}
          </div>
          <div className="location">{props.Location}</div>
          <div className="Workdescription">{props.desc}</div>
          <a href={props.WebisteLink} className='credential' target="_blank" rel="noopener noreferrer">See the Work</a><br />
          {certificate()}
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default ExperienceCard;
