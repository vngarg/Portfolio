import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import '../../Globals/Colors.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .NavComponents {
    text-decoration: none;
    padding: 18px 25px;
    color: rgb(171, 169, 171);
  }

  .NavComponents:hover {
    cursor: pointer;
    color: white;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-flow: column nowrap;
    background-color: var(--color-blueShade);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 1000;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .NavComponents {
      color: rgb(171, 169, 171);
    }

    .NavComponents::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: black !important;
      transition: width 0.3s;
    }

    .NavComponents:hover::after {
      width: 10%;
    }
  }

  .NavComponents::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: var(--color-blueShade);
    transition: width 0.3s;
    border-radius: 20px;
  }

  .NavComponents:hover::after {
    width: 40%;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to='/About' className='NavComponents'>About</Link>
      <Link to='/Experience' className='NavComponents'>Experience</Link>
      <Link to='/Projects' className='NavComponents'>Projects</Link>
      <Link to='/Contact' className='NavComponents'>Contact</Link>
    </Ul>
  );
};

export default RightNav;
