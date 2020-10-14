import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from 'react-router-dom';

import "../../Globals/Colors.css";

const Nav = styled.nav`
  .logo {
    font-size: 37px;
    padding: 7px 22px;
    font-weight: bold;
  }

  .link {
    color: white;
  }

  .link:hover {
    color: white;
  }

  .logo {
    cursor: pointer;
  }

  .logo::after {
    content: "";
    display: block;
    width: 25px;
    height: 7px;
    background: var(--color-blueShade);
    transition: width 0.3s;
    border-radius: 20px;
  }

  .logo:hover::after {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 55px;
    padding: 0 10px;

    .logo {
      font-size: 22px;
    }
  }
`;

const Navbar = ({ color }) => {
  const nav = {
    width: "100%",
    height: "130px",
    padding: "25px 50px",
    display: "flex",
    backgroundColor: `${color}`,
    color: "white",
    fontSize: "22px",
    justifyContent: "space-between",
  };

  return (
    <Nav style={nav}>
      <div className="logo">
        <Link to='/About' className='link'>
          S.G.
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
