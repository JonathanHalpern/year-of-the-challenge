import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Content, { HTMLContent } from '../components/Content';

const StyledSection = styled.section`
  p {
    > img {
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
      display: block;
    }
  }
  .iframeContainer {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const BlogPostTemplate = ({
  content,
  title,
  path,
  helmet,
  comments,
  isCms,
}) => (
  <StyledSection>
    {helmet}
    <h1>{title}</h1>
    {isCms ? <Content content={content} /> : <HTMLContent content={content} />}
    <Divider />
    {!isCms && (
      <div>
        {comments && <CommentList comments={comments.edges} />}
        <CommentForm postName={path} />
      </div>
    )}
  </StyledSection>
);

export default ({ data: { currentChallengeMarkdown, commentsMarkdown } }) => (
  <BlogPostTemplate
    content={currentChallengeMarkdown.html}
    description={currentChallengeMarkdown.frontmatter.description}
    helmet={
      <Helmet title={`Blog | ${currentChallengeMarkdown.frontmatter.title}`} />
    }
    title={currentChallengeMarkdown.frontmatter.title}
    path={currentChallengeMarkdown.frontmatter.path}
    isCompleted={currentChallengeMarkdown.frontmatter.isCompleted}
    comments={commentsMarkdown}
  />
);

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    ...CurrentChallengeFragment
    ...CommentsMarkdownFragment
  }
`;
