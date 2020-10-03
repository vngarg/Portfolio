import React, { Component, Fragment } from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Contact.css";
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="ContactForm">
          <Menu />
          <Container>
            <Row className="m-0 mt-5 mb-5">
              <Col lg={6} sm={12}>
                  <div className='ques'>
                  Have a question or want to collaborate ??<br />
                  Let me know !!
                  </div>
                <form>
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                            <InputGroupText>Name</InputGroupText>
                        </InputGroupAddon>
                        <Input type='text' placeholder='Name' />
                    </InputGroup><br />
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                            <InputGroupText>Email Id</InputGroupText>
                        </InputGroupAddon>
                        <Input type='email' placeholder='Email' required/>
                    </InputGroup><br />
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                            <InputGroupText>Messgae Subject</InputGroupText>
                        </InputGroupAddon>
                        <Input type='text' placeholder='Subject' />
                    </InputGroup><br />
                    <label>Message</label><br />
                    <textarea rows='5' cols='70' placeholder='Give your message' className='textArea' /><br />
                    <center>
                    <Button className='SubmitBtn' color='primary'>Submit</Button>   
                    </center>
                </form>
              </Col>
              <Col lg={6} sm={12}>
                Content Here
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Contact;
