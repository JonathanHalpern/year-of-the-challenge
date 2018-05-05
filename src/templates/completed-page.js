import React from 'react';

import Grid from 'material-ui/Grid';
import { HTMLContent } from '../components/Content';
import CompletedItem from '../components/CompletedItem';

const CompletedPageTemplate = ({ posts, comments }) => (
  <Grid container spacing={24}>
    {posts.map(({ node: post }) => (
      <Grid item xs={12} sm={6} md={4} key={post.frontmatter.path}>
        <CompletedItem
          post={post}
          comments={
            comments && comments.edges.filter(comment =>
              (comment.node.frontmatter.post === post.frontmatter.path)
            )
          }
        />
      </Grid>
    ))}
  </Grid>
);

export default ({ data }) => {
  const { completedPageMarkdown, comments } = data;
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts)
  return (
    <div>
      <HTMLContent
        content={completedPageMarkdown.html}
      />
      <CompletedPageTemplate
        posts={posts}
        comments={comments}
      />
    </div>);
};

export const completedPageQuery = graphql`
  query CompletedPage($path: String!) {
    completedPageMarkdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    },
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {templateKey: {eq: "blog-post"}, isCompleted: {eq: true}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          ...BlogPostPreviewFragment
        }
      }
    },
    comments: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {frontmatter: {templateKey: {eq: "comments"}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          html
          id
          frontmatter {
            name
            date
            post
          }
        }
      }
    }
  }
`;
