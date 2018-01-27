'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import Link from 'gatsby-link';
import styled from 'styled-components';
import CompletedItem from '../components/CompletedItem';

const StyledCarousel = styled(Carousel)`
  .slider-list {
    height: 270px!important;
  }
  .completed-item > div {

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
        <StyledLink to="completed">Completed</StyledLink>
        <StyledCarousel
          dragging={false}
          decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}
        >
          {
            this.props.posts.map(post => (
              <CompletedItem
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
