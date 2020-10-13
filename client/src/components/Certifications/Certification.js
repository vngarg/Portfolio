import React from "react";
import { Button } from "reactstrap";

import "./style.css";

const Certification = (props) => {
  return (
    <div className="Certi text-center">
      <img src={props.logo} alt="Company Logo" className="logo" />
      <h4 className="m-3 Cname">{props.Name}</h4>
      <p className="mr-4 ml-4">{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <Button
          color="primary"
          style={{ borderRadius: "13px", fontSize: "13px" }}
        >
          Certification
        </Button>
      </a>
    </div>
  );
};

export default Certification;
