import EMOJIS from '../constants/emojis';

const getEmojisByEmotion = (emotion) => {
  console.log(emotion, EMOJIS)
  return EMOJIS[emotion];
};

export default {
  getEmojisByEmotion,
};
