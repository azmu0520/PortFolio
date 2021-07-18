import React from "react";
import styled from "styled-components";

const Pstyle = styled.div`
  /* max-width: 400px; */
  /* position: absolute; */
  font-size: 1.8rem;
  color: #1e6b6b;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  } ;
`;

const Ptext = ({ children }) => {
  return (
    <Pstyle>
      <p>{children}</p>
    </Pstyle>
  );
};

export default Ptext;
