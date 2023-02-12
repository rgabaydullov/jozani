/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { BreakpointOverrides, createTheme } from '@mui/material/styles';
import { getCssVar } from '../../../../lib/styles/helpers';
import { getSizeUnit } from '../../../theme';
import { Breakpoints, ITheme } from '../../types';
import {
  black,
  blue,
  BREAKPOINTS,
  FONT_FAMILY,
  green,
  grey,
  red,
} from '../constants';

const DARK_THEME = (theme: ITheme) => {
  const { fontFamily = FONT_FAMILY } = (theme.typography || {} as any);

  return createTheme({
    breakpoints: {
      step: 4,
      keys: Object.values(Breakpoints),
      values: BREAKPOINTS,
    } as BreakpointOverrides,
    palette: {
      mode: 'dark',
      primary: {
        main: blue[500],
      },
      secondary: {
        // Buttons
        main: grey[500],
      },
      info: {
        // Buttons
        main: grey[900],
      },
      error: {
        // Buttons
        main: red[300],
      },
      success: {
        main: green[300],
      },
      text: {
        primary: black[100],
        secondary: grey[800],
      },
      background: {
        default: black[100],
      },
      tonalOffset: 0.115,
    },
    typography: {
      button: {
        fontFamily,
        fontSize: getCssVar('font', 'common'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(18),
        textAlign: 'center',
        textTransform: 'none',
      },
      h1: {
        fontFamily,
        fontSize: getCssVar('font', 'h1'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(60),
      },
      h2: {
        fontFamily,
        fontSize: getCssVar('font', 'h2'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(36),
      },
      h3: {
        fontFamily,
        fontSize: getCssVar('font', 'h3'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(38),
      },
      h4: {
        fontFamily,
        fontSize: getCssVar('font', 'h4'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(30),
      },
      h5: {
        fontFamily,
        fontSize: getCssVar('font', 'h5'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(24),
      },
      h6: {
        fontFamily,
        fontSize: getCssVar('font', 'h6'),
        fontWeight: getCssVar('font', 'semi-bold'),
        lineHeight: getSizeUnit(22),
      },
      body1: {
        fontFamily,
        color: black[100],
        fontSize: getCssVar('font', 'common'),
        lineHeight: getSizeUnit(18),
      },
      body2: {
        fontFamily,
        fontWeight: getCssVar('font', 'semi-bold'),
        color: black[100],
        fontSize: getCssVar('font', 'large'),
        lineHeight: getSizeUnit(22),
      },
      caption: {
        fontSize: getCssVar('font', 'small'),
        lineHeight: getSizeUnit(14),
        letterSpacing: '0.2px',
      },
    },
    components: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MuiButton: {
        styleOverrides: {
          sizeLarge: {
            height: getSizeUnit(48),
            padding: '0 1.6rem',
            borderRadius: '.6rem',
            fontSize: getCssVar('font', 'large'),
            fontWeight: getCssVar('font', 'bold'),
            lineHeight: getSizeUnit(20),
            letterSpacing: '0.1px',
          },
          sizeMedium: {
            height: getSizeUnit(38),
            padding: '0 1.6rem',
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'bold'),
          },
          sizeSmall: {
            height: getSizeUnit(32),
            padding: '0 1.2rem',
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'bold'),
            lineHeight: getSizeUnit(18),
          },
          containedPrimary: {
            background: getCssVar('green', 500),
            color: getCssVar('black', 80),
            '&:hover': {
              background: getCssVar('green', 600),
            },
            '&:active': {
              background: getCssVar('green', 700),
            },
          },
          containedSecondary: {
            background: getCssVar('grey', 900),
            color: getCssVar('grey', 100),
            '&:hover': {
              background: getCssVar('grey', 950),
            },
            '&:active': {
              background: getCssVar('grey', 975),
            },
          },
          textPrimary: {
            color: getCssVar('green', 950),
            '&:hover': {
              color: getCssVar('green', 975),
            },
            '&:active': {
              color: getCssVar('green', 975),
            },
          },
          textSecondary: {
            color: getCssVar('grey', 100),
            '&:hover': {
              background: getCssVar('grey', 950),
            },
            '&:active': {
              background: getCssVar('grey', 975),
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            fontSize: getCssVar('font', 'common'),
            fontWeight: getCssVar('font', 'semi-bold'),
            color: getCssVar('blue', 300),
            textDecoration: 'none',
            transition: 'all .27s',
            cursor: 'pointer',
            '&:hover': {
              color: getCssVar('blue', 500),
            },
            '&:active': {
              color: getCssVar('blue', 700),
            },
          }),
        },
      },
      MuiSlider: {
        styleOverrides: {
          thumbSizeSmall: {
            width: 'auto',
            height: 'inherit',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: () => ({
            fontFamily,
            fontWeight: getCssVar('font', 'semi-bold'),
          }),
        },
      },
    },
  });
};

export default DARK_THEME;
