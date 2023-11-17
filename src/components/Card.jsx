import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.background};
  padding: 16px;
  margin: 0 2px;
  border-radius: 5px;
`;

export default Card;
