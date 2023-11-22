import GlobalStyles from "../src/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/Theme";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// decorator para aplicar tema global em todos os stories
export const decorators = [
  (StoryFn) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StoryFn />
      </ThemeProvider>
    </>
  ),
];

export default preview;
