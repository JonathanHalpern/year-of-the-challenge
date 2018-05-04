import React from 'react';
import styled from 'styled-components';
import Columns from 'react-columns';
import { HTMLContent } from '../components/Content';
import ChallengeItem from '../components/ChallengeItem';
import ChallengeKey from '../components/ChallengeKey';

const StyledColumns = styled(Columns)`
  >div>div{
    >div {
      margin: 15px 0 0 0;
    }
    @media(min-width: 500px) {
      :nth-child(1) {
        >div {
          margin-right: 15px;
        }
      }
    }
    @media(min-width: 800px) {
      :nth-child(2) {
        >div {
          margin-right: 15px;
        }
      }
    }
  }
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
  <StyledColumns queries={queries}>
    {posts.filter(post => (post.node.frontmatter.templateKey === 'blog-post' && !post.node.frontmatter.isCompleted)).map(({ node: post }) => (
      <div key={post.id}>
        <ChallengeItem
          post={post}
        />
      </div>
    ))}
  </StyledColumns>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <HTMLContent
        content={post.html}
      />
      <ChallengeKey />
      <h4>You challenged us:</h4>
      <ChallengeList
        posts={posts.filter(item => !item.node.frontmatter.isPersonal)}
      />
      <h4>We challenged ourselves:</h4>
      <ChallengeList
        posts={posts.filter(item => item.node.frontmatter.isPersonal)}
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
            isPersonal
            evidenceImage
            description
            author
            difficulty
            emotion
          }
        }
      }
    }
  }
`;
