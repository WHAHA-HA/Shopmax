const breakpoints = {
  xxs: 390,
  xs: 450,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const theme = {
  white: 'rgb(255, 255, 255)',
  blue: 'rgb(111, 179, 235)',
  blue100: 'rgb(157, 201, 238)',
  dark: 'rgb(39, 39, 39)',
  gray: 'rgb(65, 65, 65)',
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    xsm: '1.4rem',
    s: '1.6rem',
    sm: '1.9rem',
    m: '2.1rem',
    l: '2.4rem',
    lm: '3rem',
    xl: '3.8rem',
    xxl: '5.2rem',
    xxxl: '7rem',
  },
  fonts: {
    mainFont: `'Montserrat', sans-serif`,
    subFont: `'Quicksand', sans-serif`,
    subFont2: `'Comfortaa', cursive`,
    specialFont: `'Nanum Pen Script', cursive`,
    specialFont2: `'Nova Mono', monospace`,
  },
  zIndex: {
    level1: '100',
    level2: '200',
    level3: '300',
    level4: '400',
    level5: '500',
    level6: '600',
    level7: '700',
    level8: '800',
    level9: '900',
    level10: '1000',
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),
};
