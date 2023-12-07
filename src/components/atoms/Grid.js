import styled from "styled-components";
import propTypes from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 16px;
`;

Grid.defaultProps = {
  columns: 4,
};

Grid.propTypes = {
  columns: propTypes.number,
};

export const Item = styled.div`
  grid-column: ${(props) => props.columnStart} / ${(props) => props.columnEnd};
  grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};
`;

Item.defaultProps = {
  columnStart: 1,
  columnEnd: -1,
  rowStart: 1,
  rowEnd: -1,
};

Item.propTypes = {
  columnStart: propTypes.number,
  columnEnd: propTypes.number,
  rowStart: propTypes.number,
  rowEnd: propTypes.number,
};

export default Grid;
