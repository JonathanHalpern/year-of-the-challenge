import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FONTS from '../constants/fonts';
import fontPickerService from '../services/fontPicker';
import '../../static/fonts/fonts.css';

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
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

const ChallengeText = styled.p`
  font-family: ${props => props.fontFamily};
  font-size: 1em;
`;


class CompletedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeTextFont: fontPickerService.getFontByName(this.props.post.frontmatter.author),
    };
    console.log(this.state);
  }

  render() {
    return (
      <Card>
        <CardContent>
          {/* <ItemTitle type="headline" component="h3">
            {this.props.post.frontmatter.title}
          </ItemTitle> */}
          <ChallengeText fontFamily={this.state.challengeTextFont}>
            {this.props.post.frontmatter.description}
          </ChallengeText>
          <p>
            Challenger: {this.props.post.frontmatter.author}
          </p>
        </CardContent>
      </Card>
    );
  }
}

export default CompletedItem;
