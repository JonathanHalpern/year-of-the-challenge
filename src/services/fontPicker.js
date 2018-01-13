import FONTS from '../constants/fonts';

const numberOfFonts = FONTS.length;

const getFontByName = (name) => {
  const lengthOfName = name ? name.length : 0;
  const fontNumber = lengthOfName % (numberOfFonts);
  return FONTS[fontNumber];
};

export default {
  getFontByName,
};
