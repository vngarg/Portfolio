import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <div>
      <Menu />
      <Container>
          <ExperienceCard position='MERN Stack developer' CompanyName='Gordian Technologies Pvt. Ltd.' desc='Will enter later' start='August 2020' end='present' duration='present' Location='Work from home' CredentialLink='https://www.linkedin.com/in/shlok-garg-0b216b191/' />
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;
