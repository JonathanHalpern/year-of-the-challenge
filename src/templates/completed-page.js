import React from 'react';
import Link from 'gatsby-link';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Content, { HTMLContent } from '../components/Content';

export const IntroTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return <section className="section section--gradient">
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
  </section>;
}

export const AboutPageTemplate = ({ title, content, contentComponent, posts }) => {
  const PageContent = contentComponent || Content;
  return <section className="section section--gradient">
    <p>{title}</p>
    <div className="post-list">
      <Grid container spacing={24}>
        {posts.filter(post => (post.node.frontmatter.templateKey === 'blog-post' && post.node.frontmatter.isCompleted)).map(({ node: post }) => {
          return (
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
          );
        })}
      </Grid>
    </div>
  </section>;
};

export default ({ data }) => {
  console.log(data)
  const { markdownRemark: post } = data;
  const { edges: posts } = data.allMarkdownRemark;
  return (<AboutPageTemplate
    contentComponent={HTMLContent}
    posts={posts}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

// export const challengesPageQuery = graphql`
//   query ChallengePage($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;
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
