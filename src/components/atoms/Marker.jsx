import React from "react";
import styled from "styled-components";

const StyledMarker = styled.div`
  width: 50px;
  height: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Marker = ({ color }) => {
  return <StyledMarker color={color}></StyledMarker>;
};

export default Marker;
