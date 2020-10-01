import React from "react";
import "./Menu.css";

const RightNav = ({ open }) => {
  return (
    <ul open={open}>
      <li>Home</li>
      <li>Experience</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  );
};

export default RightNav;
