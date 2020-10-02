import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 25px;
    color: rgb(171, 169, 171);
  }

  li:hover {
    cursor: pointer;
    color: white;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-flow: column nowrap;
    background-color: rgb(75, 108, 193);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 1000;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: rgb(171, 169, 171);
    }

    li::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: black !important;
      transition: width 0.3s;
    }

    li:hover::after {
      width: 10%;
    }
  }

  li::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: rgb(75, 108, 193);
    transition: width 0.3s;
  }

  li:hover::after {
    width: 100%;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>
      <li>Experience</li>
      <li>Projects</li>
      <li>Contact</li>
    </Ul>
  );
};

export default RightNav;
