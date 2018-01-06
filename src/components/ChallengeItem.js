import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import fontPickerService from '../services/fontPicker';
import colorPickerService from '../services/colorPicker';
import emojiPickerService from '../services/emojiPicker';
import '../../static/fonts/fonts.css';

const StyledCardContent = styled(CardContent)`
  color: ${props => props.color};
  background: ${props => props.background};
  position: relative;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const ItemAuthor = styled.p`
  margin: 0;
`;

const ItemTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 1em;
`;

const ChallengeText = styled.div`
  font-family: ${props => props.fontFamily};
  font-size: 1em;
  margin-right: 30px;
`;

const EmojiImage = styled.img`
  position: absolute;
  top: 20px;
  right: 15px;
  height: 30px;
  width: 30px;
`;

class CompletedItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.post.frontmatter);
    const difficultyColors =
      colorPickerService.getColorsByDifficulty(this.props.post.frontmatter.difficulty);
    this.state = {
      challengeTextFont: fontPickerService.getFontByName(this.props.post.frontmatter.author),
      challengeBackground: difficultyColors.background,
      challengeColor: difficultyColors.color,
      emoji: emojiPickerService.getEmojisByChallengeNumber(this.props.post.frontmatter.comfortZone),
    };
    console.log(this.state);
  }

  render() {
    return (
      <Card

      >
        <StyledCardContent
          color={this.state.challengeColor}
          background={this.state.challengeBackground}
          >
          <EmojiImage src={this.state.emoji} />
          <ChallengeText fontFamily={this.state.challengeTextFont}>
            <p>&quot;{this.props.post.frontmatter.description}&quot;</p>
            <ItemAuthor>- {this.props.post.frontmatter.author}</ItemAuthor>
          </ChallengeText>
        </StyledCardContent>
      </Card>
    );
  }
}

export default CompletedItem;
