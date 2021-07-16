import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <Wrapper className="main-cover">
      <img className="logo" src={logo} />
      <div className="manu-icon">
        <MdMenu />
      </div>
      <ul>
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .manu-icon {
    position: absolute;
    width: 200px;
  }
  ul {
    max-width: 1200px;
    width: 90%;
    margin-left: auto;
    text-align: center;
  }
  li {
    display: inline-block;
    border-radius: 8px;
    transition: 0.8s ease-in-out background-color;
    &:hover {
      background: #242019b8;
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
