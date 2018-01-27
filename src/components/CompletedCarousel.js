'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import Link from 'gatsby-link';
import styled from 'styled-components';
import CompletedItem from '../components/CompletedItem';

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
        <Carousel
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
        </Carousel>
      </div>
    );
  },
});

export default App;
