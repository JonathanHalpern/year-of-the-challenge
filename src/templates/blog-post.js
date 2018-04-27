import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
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

export const BlogPostTemplate = ({ content, title, helmet }) => (
  <StyledSection>
    { helmet }
    <h1>{title}</h1>
    <HTMLContent content={content} />
  </StyledSection>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (<BlogPostTemplate
    content={post.html}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
    isCompleted={post.frontmatter.isCompleted}
  />);
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
    }
  }
`;
