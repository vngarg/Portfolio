import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import Gordian from '../../assets/Logos/Gordian.png';
import SKCF from '../../assets/Logos/SKCF.jpg';

const Experience = () => {

  const GordianDesc = () => {
    return (
      <div>
        Gordian Technologies provides secure delivery feature to its customers. Working with them I had developed their website and added these features.
        <ol>
          <li>Added Login and Signup to the website.</li>
          <li>Integrated razorpay payment gateway.</li>
          <li>Added the customer form and messaging feature.</li>
          <li>Developed an Admin panel wo accept and reject the orders.</li>
          <li>Integrated Google API's for Autocomplete and distance calculation.</li>
        </ol>
      </div>
    );
  }

  const SKDesc = () => {
    return (
      <div>
        SK Children Foundation is a non-profit organization which provides free education to the unprivileged children. Initially I worked on their WordPress website for 2 months and now I'm the Domain head of Web development Domain. I
        <ol>
          <li>Manage all the interns of the domain.</li>
          <li>Look for the necessary improvements on the website and implement them with other members.</li>
          <li>Guide and help other interns in their work.</li>
          <li>Be in touch with other domains for the regular content to be uploaded on the website.</li>
        </ol>
      </div>
    )
  }

  return (
    <div>
      <Menu />
      <Container>
          <ExperienceCard Logo={Gordian} position='MERN Stack developer' CompanyName='Gordian Technologies Pvt. Ltd.' desc={GordianDesc()} start='August 2020' end='present' duration='3 months' Location='Work from home' CredentialLink='null' websiteLink='https://orders.gordian.in' />
          <ExperienceCard Logo={SKCF} position='Web development Domain Head' CompanyName='SK Children Foundation' desc={SKDesc()} start='March 2020' end='present' duration='null' Location='Work from home' CredentialLink='https://drive.google.com/file/d/1CNBYPZ2PdZb6x5My4AvUN9BE4ii04dnK/view?usp=sharing' websiteLink='https://skchildrenfoundation.com/' />
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;
