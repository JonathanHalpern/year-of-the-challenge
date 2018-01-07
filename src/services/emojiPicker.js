import EMOJIS from '../constants/emojis';

const getEmojisByEmotion = (emotion) => {
  return EMOJIS[emotion];
};

export default {
  getEmojisByEmotion,
};
