import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import CompletedItem from '../components/CompletedItem';
import CarouselWrapper from './CarouselWrapper';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: none;
  }
`;

class CompletedCarousel extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
    this.handleAfterSlide = this.handleAfterSlide.bind(this);
  }

  handleAfterSlide(newSlideIndex) {
    this.setState({
      currentSlideIndex: newSlideIndex,
    });
  }

  render() {
    const { posts = [] } = this.props;

    const prevSlideIndex = this.state.currentSlideIndex
      ? this.state.currentSlideIndex - 1
      : posts.length - 1;

    const photosNodes = posts.map((post, key) => {
      if (key <= this.state.currentSlideIndex + 1 || key === prevSlideIndex) {
        return (
          <CompletedItem key={post.node.frontmatter.path} post={post.node} />
        );
      }
      return <div key={key} />;
    });

    return (
      <div>
        <StyledLink to="completed">Completed</StyledLink>
        <CarouselWrapper
          dragging={false}
          swiping={false}
          autoplay
          afterSlide={this.handleAfterSlide}
        >
          {photosNodes}
        </CarouselWrapper>
      </div>
    );
  }
}

export default CompletedCarousel;
