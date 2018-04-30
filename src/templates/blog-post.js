import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';

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
  const { blogPost: post } = data;
  return (<StyledSection>
    <Helmet title={`Blog | ${post.frontmatter.title}`} />
    <h1>{post.frontmatter.title}</h1>
    <Divider />
  </StyledSection>);
};

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  blogPost: markdownRemark(
        frontmatter:{
          path:{eq:$path},
          templateKey:{eq:"blog-post"}
          }
      ) {
          html
          id
          frontmatter {
            templateKey
            path
            title
          }
      },
}
`;
