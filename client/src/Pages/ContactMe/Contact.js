import React, { Component, Fragment } from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Variables from "../../Globals/Variables";

import "./Contact.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Alert,
} from "reactstrap";
import Shlok from "../../assets/images/Shlok.jpg";

const BaseUrl = Variables.baseUrl;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",

      AlertVisible: false,
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit = (e) => {
    e.preventDefault();

    const payLoad = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios({
      url: `${BaseUrl}/Response`,
      method: "POST",
      data: payLoad,
    })
      .then(() => {
        console.log("Data had been recorded successfully");
        this.setState({
          AlertVisible: true,
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      })
      .catch((error) => {
        console.log("Error on Client side, ", error);
      });
  };

  change = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const FormConfirm = () => {
      if (this.state.AlertVisible)
        return (
          <Alert color="success">
            Thank you for contacting me{" "}
            <span role="img" aria-label="Smiling Emoji">
              😀
            </span>{" "}
            I had received your message.
          </Alert>
        );
      else return null;
    };

    return (
      <Fragment>
        <div className="ContactForm">
          <Menu color="rgba(25, 26, 29, 1)" />
          <Container>
            <Row className="m-0 mt-5 mb-5">
              <Col lg={6} sm={12}>
                <img src={Shlok} alt="Shlok" className="ContactImage" />
                <div className="contactDetails">
                  Fill this form or directly contact me !!
                  <br />
                  <a href="tel:8307747802">+91-8307747802</a>
                  <br />
                  <a href="emailto:sngargrsd@gmail.com">sngargrsd@gmail.com</a>
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="ques">
                  Have some questions or want to collaborate ??
                  <br />
                  Let me know !!
                </div>
                <form onSubmit={(e) => this.submit(e)}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Name</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={(e) => this.change(e)}
                    />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Email Id</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={(e) => this.change(e)}
                      required
                    />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Messgae Subject</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={this.state.subject}
                      onChange={(e) => this.change(e)}
                    />
                  </InputGroup>
                  <br />
                  <label>Message</label>
                  <br />
                  <textarea
                    rows="5"
                    cols="70"
                    placeholder="Give your message"
                    className="textArea"
                    name="message"
                    value={this.state.message}
                    onChange={(e) => this.change(e)}
                  />
                  <br />
                  {FormConfirm()}
                  <center>
                    <Button className="SubmitBtn" color="primary">
                      Submit
                    </Button>
                  </center>
                </form>
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
