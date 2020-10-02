import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  background-color: rgba(25, 26, 29, 1);
  color: white;
  font-size: 22px;
  justify-content: space-between;

  .logo {
    font-size: 28px;
    padding: 7px 22px;
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
