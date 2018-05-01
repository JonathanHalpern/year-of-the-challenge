import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import _ from 'lodash';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
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

export const BlogPostTemplate = ({ content, title, path, helmet, comments }) => (
  <StyledSection>
    { helmet }
    <h1>{title}</h1>
    <HTMLContent content={content} />
    <Divider />
    {
      _.isString(content) && <div>
        <CommentForm postName={path} />
        { comments && <CommentList comments={comments.edges} /> }
        </div>
    }
  </StyledSection>
);

export default ({ data }) => {
  const { blogPost: post, comments } = data;
  return (<BlogPostTemplate
    content={post.html}
    description={post.frontmatter.description}
    helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
    title={post.frontmatter.title}
    path={post.frontmatter.path}
    isCompleted={post.frontmatter.isCompleted}
    comments={comments}
  />);
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
