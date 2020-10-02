import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Skills = () => {
    return (
        <div>
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={4} sm={12}>
                            First
                        </Col>
                        <Col lg={4} sm={12}>
                            Second
                        </Col>
                        <Col lg={4} sm={12}>
                            Thrid
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        </div>
    )
}

export default Skills
