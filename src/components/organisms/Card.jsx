import styled from "styled-components";
import propTypes from "prop-types";

const Card = styled.div`
  background-color: ${(props) => props.background};
  /* background-color: #fff; */
  padding: 16px;
  margin: 0 2px;
  border-radius: 5px;
  box-shadow: 1px 2px #dadada;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  cursor: pointer;

  img {
    border-radius: 5px;
    margin-bottom: 10px;
    order: -1;
  }

  h4 {
    color: #324b65;
  }
`;

Card.propTypes = {
  background: propTypes.string,
};

export default Card;
