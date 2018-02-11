import React, { Component } from 'react';
import styled from 'styled-components';
import Card, { CardContent } from 'material-ui/Card';
import CompletedPopup from './CompletedPopup';
import ImageWithOverlay from './ImageWithOverlay';
import failedStamp from '../../static/img/Functional/stamp-failed.png';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

const ItemTitle = styled.h3`
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
      <StyledCard onClick={this.togglePopup} className="completed-item">
        <ImageWithOverlay
          className="media-image"
          baseImage={this.props.post.frontmatter.evidenceImage}
          overlayImage={failedStamp}
          showOverlay={this.props.post.frontmatter.isFailed}
        />
        <CardContent>
          <ItemTitle type="headline" component="h3">
            {this.props.post.frontmatter.title}
          </ItemTitle>
        </CardContent>
        <CompletedPopup
          post={this.props.post}
          isOpen={this.state.isPopupOpen}
          handleClose={this.togglePopup}
        />
      </StyledCard>
    );
  }
}

export default CompletedItem;
