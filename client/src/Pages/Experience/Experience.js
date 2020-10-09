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
          <ExperienceCard />
      </Container>
      <Footer />
    </div>
  );
};

export default Experience;
