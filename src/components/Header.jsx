import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web development and website promotions</h1>
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
        <a href="/Header" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
