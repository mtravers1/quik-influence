import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const creditsTransactionalTableBorder = {
  border: '1px solid #707070',
};

const fonts = {
  mono: `'Menlo', monospace`,
  heading: 'Montserrat',
  body: 'Montserrat',
};
const space = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
};

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

const radii = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  space,
  zIndices,
  radii,
  colors: {
    black: '#16161D',
    green: '#00BE85',
    brand: {
      400: '#FC5A5A',
      500: '#FF0000'
    }
  },
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: 'quik',
  },
  components: {
    Checkbox: {
      variants: {
        brand: {
          control: {
            h: '1rem',
            w: '1.5rem',
            borderRadius: '4px',
            border: '1px solid',
            borderColor: '#707070',
            mr: '0.3rem',
            _focus: {
              boxShadow: 'none',
            },
          },
        },
      },
      search: {
        _checked: {
          bgColor: '#FF0000'
        },
        control: {
          h: '2rem',
          w: '2rem',
          border: '1px solid',
          borderColor: '#707070',
          mr: '0.3rem',
          bgColor: '#FF0000',
          _checked: {
            bgColor: '#FF0000'
          }
        },
    },
  },
  Table: {
    variants: {
      creditsTransactionalTable: (props: any) => ({
        table: { bgColor: mode('white', 'black.500')(props) },
        tr: {
          ...creditsTransactionalTableBorder,
        },
        th: {
          ...creditsTransactionalTableBorder,
        },
        td: {
          ...creditsTransactionalTableBorder,
        },
      }),
      leadTable: (props: any) => ({
        table: { bgColor: mode('#F5F8F9', 'black.500')(props) },
        tr: {
          ...creditsTransactionalTableBorder,
        },
        td: {
          padding: '.5rem',
          fontSize: '1rem',
          textAlign: 'center',
        },
      }),
    },
  },
  Switch: {
    variants: {
      brand: {
        thumb: {
          bgColor: 'red',
          _checked: {
            transform: 'translateX(20px)',
          },
        },
        track: {
          bgColor: 'black',
          width: '3.5rem',
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
},
});

export default theme;
