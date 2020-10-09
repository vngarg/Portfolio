import React from 'react'
import { Row, Col } from 'reactstrap';

import './cards.css';

const ExperienceCard = (props) => {
    return (
        <div>
            <Row>
                <Col xl={6} sm={12}>
                    <div className='position'>
                        {props.position}
                    </div>
                </Col>
                <Col xl={6} sm={12}>
                    <div className='CompanyName'>
                        {props.CompanyName}
                    </div>
                    <div className='duration'>
                        {props.start}-{props.end}{' '}{props.duration}
                    </div>
                    <div className='location'>
                        {props.Location}
                    </div>
                    <div className='Workdescription'>
                        {props.desc}
                    </div>

                    Enter credential link, if present.
                </Col>
            </Row>
        </div>
    )
}

export default ExperienceCard
