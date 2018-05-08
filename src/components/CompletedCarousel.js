import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import CompletedItem from '../components/CompletedItem';
import CarouselWrapper from './CarouselWrapper';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration:none;
  }
`;

const CompletedCarousel = ({ posts, comments }) => (
  <div>
    <StyledLink to="completed">Completed</StyledLink>
    <CarouselWrapper
      dragging={false}
      swiping={false}
    >
      {
        posts.map(post => (
          <CompletedItem
            key={post.node.frontmatter.path}
            post={post.node}
            comments={
              comments && comments.edges.filter(comment =>
                (comment.node.frontmatter.post === post.node.frontmatter.path)
              )
            }
          />
        ))
      }
    </CarouselWrapper>
  </div>
);

export default CompletedCarousel;
