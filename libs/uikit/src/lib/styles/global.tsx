import { createGlobalStyle } from 'styled-components';
import {
  FONTS,
  FONT_FAMILY,
  red,
  green,
  blue,
  grey,
  yellow,
  black,
  white,
  BREAKPOINTS,
  purple,
} from '../theme';
import { map2CssVars } from './helpers';

const GlobalStyle = createGlobalStyle`
  :root {
    ${map2CssVars(FONTS, 'font')}
    ${map2CssVars(BREAKPOINTS, 'bp')}
    --font-family: ${FONT_FAMILY};
    --smooth-transition: .27s;

    ${map2CssVars(red, 'red')}
    ${map2CssVars(green, 'green')}
    ${map2CssVars(blue, 'blue')}
    ${map2CssVars(grey, 'grey')}
    ${map2CssVars(yellow, 'yellow')}
    ${map2CssVars(purple, 'purple')}
    ${map2CssVars(black, 'black')}
    ${map2CssVars(white, 'white')}
  }

  html {
    font-family: var(--paylol-font-family);
    font-weight: var(--paylolg-font-semi-bold);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
`;

export default GlobalStyle;
