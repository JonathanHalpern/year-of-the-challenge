import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CompletedPopup from './CompletedPopup';

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


class CompletedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isPopupOpen: !this.state.isPopupOpen,
    });
  }

  render() {
    return (
      <Card>
        <StyledCardMedia
          className="media-image"
          image={this.props.post.frontmatter.evidenceImage}
        />
        <CardContent>
          <ItemTitle type="headline" component="h3">
            {this.props.post.frontmatter.title}
          </ItemTitle>
        </CardContent>
        <CardActions disableActionSpacing>
          <Button onClick={this.togglePopup}>
            READ
          </Button>
        </CardActions>
        <CompletedPopup
          post={this.props.post}
          isOpen={this.state.isPopupOpen}
          handleClose={this.togglePopup}
        />
      </Card>
    );
  }
}

export default CompletedItem;
