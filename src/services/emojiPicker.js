import happyEmoji from '../../static/img/Functional/happy_emoji.png';
import tentativeEmoji from '../../static/img/Functional/tentative_emoji.png';
import anguishEmoji from '../../static/img/Functional/anguish_emoji.png';

const EMOJIS = [
  happyEmoji,
  tentativeEmoji,
  anguishEmoji
]

const getEmojisByChallengeNumber = (challengeNumber) => {
  return EMOJIS[challengeNumber];
};

export default {
  getEmojisByChallengeNumber,
};
