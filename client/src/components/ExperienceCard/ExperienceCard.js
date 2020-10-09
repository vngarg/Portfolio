import React from "react";
import { Row, Col } from "reactstrap";

import "./cards.css";

const ExperienceCard = (props) => {
  return (
    <div>
      <Row className='row'>
        <Col xl={6} sm={12}>
          <div className="position">{props.position}</div>
        </Col>
        <Col xl={6} sm={12}>
          <div className="CompanyName">
            <img src={props.Logo} alt="Gordian Technologies" className="Logo" />
            {props.CompanyName}
          </div>
          <div className="duration">
            {props.start} - {props.end}, {props.duration}
          </div>
          <div className="location">{props.Location}</div>
          <div className="Workdescription">{props.desc}</div>

          <a
            href={props.CredentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="credential"
          >
            Certificate
          </a>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default ExperienceCard;
