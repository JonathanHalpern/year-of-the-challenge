import React from 'react';
import styled from 'styled-components';
import Columns from 'react-columns';
import Content, { HTMLContent } from '../components/Content';
import ChallengeItem from '../components/ChallengeItem';

const ColumnItem = styled.div`
  margin: 15px 15px 0 0;
`;

const queries = [{
  columns: 1,
  query: 'min-width: 200px',
}, {
  columns: 2,
  query: 'min-width: 500px',
}, {
  columns: 3,
  query: 'min-width: 800px',
}];

export const ChallengeList = ({ posts }) => (
  <Columns queries={queries}>
    {posts.filter(post => (post.node.frontmatter.templateKey === 'blog-post' && !post.node.frontmatter.isCompleted)).map(({ node: post }) => (
      <ColumnItem key={post.id}>
        <ChallengeItem
          post={post}
        />
      </ColumnItem>
    ))}
  </Columns>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <HTMLContent
        content={post.html}
      />
      <ChallengeList
        posts={posts}
      />
    </div>);
};

export const challengesPageQuery = graphql`
  query ChallengesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    },
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            isCompleted
            evidenceImage
            description
            author
            difficulty
          }
        }
      }
    }
  }
`;
