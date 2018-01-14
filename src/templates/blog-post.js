import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';

const StyledSection = styled.section`
  p {
    display: flex;
    img {
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

export const BlogPostTemplate = ({ content, contentComponent, description, title, isCompleted, helmet }) => {
  const PostContent = contentComponent || Content;
  return (<StyledSection className="section">
    { helmet ? helmet : ""}
    <h1>{title}</h1>
    <PostContent content={content} />
  </StyledSection>);
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
    isCompleted={post.frontmatter.isCompleted}
  />;
}

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
