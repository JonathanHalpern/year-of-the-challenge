import React from 'react';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

import Grid from 'material-ui/Grid';
import Content, { HTMLContent } from '../components/Content';

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

export const AboutPageTemplate = ({ posts }) => (
  <Grid container spacing={24}>
    {posts.filter(post => (post.node.frontmatter.templateKey === 'blog-post' && post.node.frontmatter.isCompleted)).map(({ node: post }) => (
      <Grid item xs={12} md={6} lg={4}>
        <Link className="has-text-primary" to={post.frontmatter.path} key={post.id}>
          <Card>
            <StyledCardMedia
              className="media-image"
              image={post.frontmatter.evidenceImage}
            />
            <CardContent>
              <Typography type="headline" component="h2">
                {post.frontmatter.title}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <HTMLContent
        content={post.html}
      />
      <AboutPageTemplate
        posts={posts}
      />
    </div>);
};

export const completedPageQuery = graphql`
  query CompletedPage($path: String!) {
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
          }
        }
      }
    }
  }
`;
