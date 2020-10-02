import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 130px;
  padding: 25px 50px;
  display: flex;
  background-color: rgba(25, 26, 29, 1);
  color: white;
  font-size: 22px;
  justify-content: space-between;

  .logo {
    font-size: 37px;
    padding: 7px 22px;
    font-weight: bold;
  }

  .logo::after {
    content: "";
    display: block;
    width: 25px;
    height: 7px;
    background: rgb(75, 108, 193);
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
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        S.G.
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
