import Grid, { Item } from "./Grid";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Grid",
  component: Grid,
};

const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: #bbb;
`;

export const Example = {
  render: () => (
    <Grid col={4}>
      <Item colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
        <Box></Box>
      </Item>
      <Item colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
        <Box></Box>
      </Item>
      <Item colStart={3} colEnd={4} rowStart={3} rowEnd={4}>
        <Box></Box>
      </Item>
      <Item colStart={4} colEnd={5} rowStart={4} rowEnd={5}>
        <Box></Box>
      </Item>
    </Grid>
  ),
};
<Box></Box>;
