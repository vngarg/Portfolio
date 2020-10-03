import React from 'react';
import { Container, Row, Col }  from 'reactstrap';

import './styles.css';

const Footer = () => {
    return (
        <div className='footer pt-5 pb-5'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='name mb-3'>
                            S.G.
                        </div>
                        <div className='desc'>
                            I'm a MERN Stack developer and an Android developer. An avid social worker who works towards providing education to all. 
                        </div><br />
                        <div classname='contact'>
                            <a href='tel:8307747802'>+91-8307747802</a><br />
                            <a href='emailto:sngargrsd@gmail.com'>sngargrsd@gmail.com</a>
                        </div>
                    </Col>
                    <Col lg={3}>
                        Second
                    </Col>
                    <Col lg={3}>
                        Third
                    </Col>
                    <Col lg={3}>
                        Fourth
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
