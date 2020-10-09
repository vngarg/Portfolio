import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import Gordian from '../../assets/Logos/Gordian.png';

const Experience = () => {
  return (
    <div>
      <Menu />
      <Container>
          <ExperienceCard Logo={Gordian} position='MERN Stack developer' CompanyName='Gordian Technologies Pvt. Ltd.' desc='Managing all the web developers in the organisation is a great work. I have to clear their doubts and also they all report directly to me for all the changes needed in the website. Currently I am developing a new website for the organisation.' start='August 2020' end='present' duration='3 months' Location='Work from home' CredentialLink='https://www.linkedin.com/in/shlok-garg-0b216b191/' />
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;
