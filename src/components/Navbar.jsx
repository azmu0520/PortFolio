import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper className="main-cover">
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <UL open={open}>
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
      </UL>
    </Wrapper>
  );
};
export default Navbar;

const UL = styled.ul`
  max-width: 1200px;
  width: 90%;
  margin-left: auto;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const Burger = styled.div`
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    z-index: 2;

    top: 22px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? "#fff" : "blue")};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.4s ease-in-out;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  li {
    display: inline-block;
    border-radius: 8px;
    transition: 0.8s ease-in-out background-color;
    &:hover {
      background: #242019b8;
    }
    @media (max-width: 768px) {
      /* background: white; */
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
