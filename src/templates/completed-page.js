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

export default ({
  data: {
      currentPageMarkdown,
      completedChallengesMarkdownRemark: { edges: completedChallenges },
      allCommentsMarkdown,
    },
  }) => (
    <div>
      <HTMLContent
        content={currentPageMarkdown.html}
      />
      <CompletedPageTemplate
        posts={completedChallenges}
        comments={allCommentsMarkdown}
      />
    </div>
  );

export const completedPageQuery = graphql`
  query CompletedPage($path: String!) {
    ...CurrentPageFragment,
    ...CompletedChallengesMarkdownFragment,
    ...AllCommentsMarkdownFragment
  }
`;
