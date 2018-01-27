'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import ChallengeItem from '../components/ChallengeItem';

const App = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    console.log(this.props)
    return (
      <Carousel
        wrapAround
        decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}
      >
        {
          this.props.posts.map(post => (
            <ChallengeItem
              post={post.node}
            />
          ))
        }
      </Carousel>
    );
  },
});

export default App;
