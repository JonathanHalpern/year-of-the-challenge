import DIFFUCLTY_COLORS from '../constants/difficultyColors';

const getColorsByDifficulty = (difficulty) => {
  return DIFFUCLTY_COLORS[difficulty];
};

export default {
  getColorsByDifficulty,
};
