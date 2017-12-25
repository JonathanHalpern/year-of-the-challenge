import React from 'react';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Content, { HTMLContent } from '../components/Content';

export const IntroTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (<section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export const AboutPageTemplate = ({ posts }) => (
  <section className="section section--gradient">
    <div className="post-list">
      <Grid container spacing={24}>
        {posts.filter(post => (post.node.frontmatter.templateKey === 'blog-post' && post.node.frontmatter.isCompleted)).map(({ node: post }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Link className="has-text-primary" to={post.frontmatter.path} key={post.id}>
              <Card>
                <CardMedia
                  className="media-image"
                  image={post.frontmatter.evidenceImage}
                  title="Contemplative Reptile"
                  style={{ height: '100px' }}
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
    </div>
  </section>
);

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <IntroTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
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
