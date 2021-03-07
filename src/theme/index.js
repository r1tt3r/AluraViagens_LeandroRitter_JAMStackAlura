import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#35B6FF',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#0094E8',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#35B6FF',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};
export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Roboto', sans-serif",
  transition: '200ms ease-in-out',
};
