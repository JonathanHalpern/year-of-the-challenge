import DIFFICULTY_COLORS from '../constants/difficultyColors';

const getColorsByDifficulty = (difficulty) => {
  return DIFFICULTY_COLORS[difficulty];
};

export default {
  getColorsByDifficulty,
};
