import Typography from 'typography';

import sutroTheme from 'typography-theme-sutro';

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    marginTop: rhythm(1 / 2),
  },
});

const typography = new Typography(sutroTheme);

export default typography;