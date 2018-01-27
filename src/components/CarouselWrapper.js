'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';

import IconButton from 'material-ui/IconButton';

import '../../static/fonts/fontawesome/style.css';

const StyledCarousel = styled(Carousel)`
  .slider-list {
    height: 260px!important;
  }
  .challenge-item > div {
    height: 260px;
  }
`;

const StyledIconButton = styled(IconButton)`
  opacity: 0.7;
  i {
    font-size: 75px;
    color: white;
  }
`;

const Decorators = [
  {
    component: React.createClass({
      render() {
          return (
            <StyledIconButton color="contrast" aria-label="Menu" onClick={this.props.previousSlide}>
              <i className="fa fa-angle-left" />
            </StyledIconButton>
          );
      },
      shouldComponentUpdate() { return this.props.currentSlide === 0; },
    }),
    position: 'CenterLeft'
  },
  {
    component: React.createClass({
      render() {
        return (
          <StyledIconButton color="contrast" aria-label="Menu" onClick={this.props.nextSlide}>
            <i className="fa fa-angle-right" />
          </StyledIconButton>
        );
      },
    }),
    position: 'CenterRight',
  },
];

const CarouselWrapper = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <StyledCarousel
        wrapAround
        decorators={Decorators}
        initialSlideHeight={200}
        autoplay
        autoplayInterval={7000}
        {...this.props}
      >
        {
          this.props.children
        }
      </StyledCarousel>
    );
  },
});

export default CarouselWrapper;
