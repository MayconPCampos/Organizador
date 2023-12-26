import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
  margin: 2% 20%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  opacity: ${(props) => props.opacity};
`;

const NewCard = ({ opacity }) => {
  return <Styled opacity={opacity} />;
};

export default NewCard;
