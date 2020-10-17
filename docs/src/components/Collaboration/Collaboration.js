import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./style.css";

const Collaboration = () => {
  return (
      <Container>
          <div className="mt-5 text-center">
      <div className="header text-center">
        Have some projects or interested in Collaborating ??
      </div>
      <div className="description text-center mt-3">
        I’m always open to discussing product design work or partnership
        opportunities.
      </div>
      <Link to="/Contact" className="link">
        <Button className="Colabbutton">Start a Conversation</Button>
      </Link>
    </div>
      </Container>
  );
};

export default Collaboration;
