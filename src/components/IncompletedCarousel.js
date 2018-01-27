'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ChallengeItem from './ChallengeItem';

const StyledCarousel = styled(Carousel)`
  .slider-list {
    height: 260px!important;
  }
  .challenge-item > div {
    height: 260px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration:none;
  }
`;

const App = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <div>
        <StyledLink to="challenges">Challenges</StyledLink>
        <StyledCarousel
          wrapAround
          decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}
          initialSlideHeight={200}

        >
          {
            this.props.posts.map(post => (
              <ChallengeItem
                post={post.node}
              />
            ))
          }
        </StyledCarousel>
      </div>
    );
  },
});

export default App;
