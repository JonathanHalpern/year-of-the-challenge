'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import CompletedItem from '../components/CompletedItem';

const App = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    console.log(this.props)
    return (
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
    );
  },
});

export default App;
