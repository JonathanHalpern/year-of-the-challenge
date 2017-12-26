import FONTS from '../constants/fonts';

const numberOfFonts = FONTS.length;

const getFontByName = (name) => {
  const lengthOfName = name.length;
  const fontNumber = lengthOfName % (numberOfFonts);
  return FONTS[fontNumber];
};

export default {
  getFontByName,
};
