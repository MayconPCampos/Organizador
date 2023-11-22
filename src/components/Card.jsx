import styled from "styled-components";
import propTypes from "prop-types";

const Card = styled.div`
  background-color: ${(props) => props.background};
  padding: 16px;
  margin: 0 2px;
  border-radius: 5px;
  box-shadow: 1px 1px #aaa;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

Card.propTypes = {
  background: propTypes.string,
};

export default Card;
