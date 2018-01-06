import happyEmoji from '../../static/img/Functional/happy_emoji.png';
import tentativeEmoji from '../../static/img/Functional/tentative_emoji.png';
import anguishedEmoji from '../../static/img/Functional/anguished_emoji.png';
import excitedEmoji from '../../static/img/Functional/excited_emoji.png';
import confusedEmoji from '../../static/img/Functional/confused_emoji.png';
import embarrassedEmoji from '../../static/img/Functional/embarrassed_emoji.png';

const EMOJIS = [
  excitedEmoji,
  happyEmoji,
  confusedEmoji,
  tentativeEmoji,
  embarrassedEmoji,
  anguishedEmoji
]

const getEmojisByChallengeNumber = (challengeNumber) => {
  return EMOJIS[challengeNumber];
};

export default {
  getEmojisByChallengeNumber,
};
