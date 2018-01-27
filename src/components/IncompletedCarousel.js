import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ChallengeItem from './ChallengeItem';
import CarouselWrapper from './CarouselWrapper';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration:none;
  }
`;

const IncompletedCarousel = ({ posts }) => (
  <div>
    <StyledLink to="challenges">Challenges</StyledLink>
    <CarouselWrapper>
      {
        posts.map(post => (
          <ChallengeItem
            post={post.node}
          />
        ))
      }
    </CarouselWrapper>
  </div>
);

export default IncompletedCarousel;
