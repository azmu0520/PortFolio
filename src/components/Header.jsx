import React from "react";
import Typed from "react-typed";
import hero from "../assets/img/yangi.png";
import styled from "styled-components";
import Ptext from "./Ptext";

const Header = () => {
  return (
    <Wrapper>
      <div className="main-info">
        <div className="hero-img">
          <img src={hero} alt="" />
        </div>
        <div className="hero-info">
          <Ptext>
            I am working as freelance web designer and developer for a year. I
            love to design and make new experience for the people.
          </Ptext>
        </div>
        <Typed
          className="typed-text"
          strings={[
            "Web Desing ",
            "Web Development",
            "Free-style Wrestler",
            "Crazy of Travelling",
            "It is me",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  height: 100vh;

  .hero-img {
    position: relative;
  }
  img {
    width: 1300px;
    height: 700px;
    position: relative;
    border-radius: 70px;
    opacity: 0.2;
    margin-top: 8rem;
    @media (max-width: 768px) {
      opacity: 0.1;

      border-radius: 0;
      margin-top: 0;
      height: 100vh;
      width: 100vw;
    }
  }
  .hero-info h4 {
    position: absolute;
    width: 760px;
    top: 70%;
    bottom: 0;
    right: 0;
    left: 30%;
    font-size: 22px;
    color: #9cdfc3;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .typed-text {
    position: absolute;
    width: 760px;
    top: 80%;
    bottom: 0;
    right: 0;
    left: 40%;
    font-size: 40px;
    color: #9cdfc3;
    @media (max-width: 768px) {
      width: 200px;
      position: absolute;

      top: 60%;
      bottom: 0;
      right: 0;
      left: 35%;
    }
  }
`;
