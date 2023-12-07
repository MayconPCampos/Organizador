import styled from "styled-components";
import propTypes from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  gap: 16px;
`;

Grid.defaultProps = {
  col: 4,
};

Grid.propTypes = {
  col: propTypes.number,
};

export const Item = styled.div`
  grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};
  grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};
`;

Item.defaultProps = {
  colStart: 1,
  colEnd: -1,
  rowStart: 1,
  rowEnd: -1,
};

Item.propTypes = {
  colStart: propTypes.number,
  colEnd: propTypes.number,
  rowStart: propTypes.number,
  rowEnd: propTypes.number,
};

export default Grid;
