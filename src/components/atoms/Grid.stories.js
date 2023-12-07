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
    <Grid columns={4}>
      <Item columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
        <Box></Box>
      </Item>
      <Item columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>
        <Box></Box>
      </Item>
      <Item columnStart={3} columnEnd={4} rowStart={3} rowEnd={4}>
        <Box></Box>
      </Item>
      <Item columnStart={4} columnEnd={5} rowStart={4} rowEnd={5}>
        <Box></Box>
      </Item>
    </Grid>
  ),
};
<Box></Box>;
