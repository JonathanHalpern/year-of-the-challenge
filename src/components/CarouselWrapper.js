import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';

import IconButton from 'material-ui/IconButton';

const StyledCarousel = styled(Carousel)`
  .slider-list {
    height: 260px !important;
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
    margin-top: -12px;
  }
`;

const Decorators = [
  {
    component: props => (
      <StyledIconButton aria-label="Menu" onClick={props.previousSlide}>
        <i className="fa fa-angle-left" />
      </StyledIconButton>
    ),
    position: 'CenterLeft',
  },
  {
    component: props => (
      <StyledIconButton aria-label="Menu" onClick={props.nextSlide}>
        <i className="fa fa-angle-right" />
      </StyledIconButton>
    ),
    position: 'CenterRight',
  },
];

const CarouselWrapper = props => (
  <StyledCarousel
    wrapAround
    decorators={Decorators}
    initialSlideHeight={200}
    autoplay={false}
    autoplayInterval={7000}
    {...props}
  >
    {props.children}
  </StyledCarousel>
);

export default CarouselWrapper;
