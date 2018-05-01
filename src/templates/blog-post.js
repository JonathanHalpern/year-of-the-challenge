import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import _ from 'lodash';
import CommentForm from '../components/CommentForm';
import HTMLContent from '../components/Content';

const StyledSection = styled.section`
  p {
    display: flex;
    img {
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
    }
  }
  .iframeContainer {
    position:relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
    iframe, object, embed {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
  }
`;

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (<StyledSection>
    <Helmet title={`Blog | ${post.frontmatter.title}`} />
    <h1>{post.frontmatter.title}</h1>
    <p> test11 </p>
    <p> { _.isString(post.html) ? 'string' : 'nope'} </p>
    <HTMLContent content={post.html} />
    <Divider />
  </StyledSection>);
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        isCompleted
      }
    },
    comments: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {frontmatter: {templateKey: {eq: "comments"}, post: {eq: $path}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          html
          id
          frontmatter {
            name
            date
          }
        }
      }
    }
  }
`;
