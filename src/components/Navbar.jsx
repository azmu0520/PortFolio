import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <Wrapper className="main-cover">
      <img className="logo" src={logo} />

      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
      <div className="menu-icon">
        <MdMenu />
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 100;
  background: #262626;
  ul {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  li {
    display: inline-block;
    border-radius: 8px;
    transition: 1s ease-in-out background-color;
    &:hover {
      background: #160b06b9;
    }
  }
  a {
    display: inline-block;
    padding: 1rem 3rem;
    font-size: 2rem;
    color: #bcb4b4;
    text-decoration: none;
  }
  .active {
    color: #ffffff;
  }
`;
