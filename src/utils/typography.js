import Typography from 'typography';

import sutroTheme from 'typography-theme-sutro';

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    marginTop: rhythm(1 / 2),
  },
  ul: {
    listStyleType: 'none',
  },
  'a,a:hover': {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const typography = new Typography(sutroTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
