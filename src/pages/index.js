import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Content, { HTMLContent } from '../components/Content';
import HomePageTemplate from '../templates/home-page';
import CompletedCarousel from '../components/CompletedCarousel';
import IncompletedCarousel from '../components/IncompletedCarousel';

export default class IndexPage extends React.Component {
    handleScriptLoad() {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', (user) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }
      window.netlifyIdentity.init();
    }

  render() {
    const { markdownRemark: post } = this.props.data;
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const completedPosts = posts.filter(item => (item.node.frontmatter.templateKey === 'blog-post' && item.node.frontmatter.isCompleted))
    const incompletePosts = posts.filter(item => (item.node.frontmatter.templateKey === 'blog-post' && !item.node.frontmatter.isCompleted))
    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <h1>Year of the Challenge</h1>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={6}>
            <CompletedCarousel
              posts={completedPosts}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <IncompletedCarousel
              posts={incompletePosts}
            />
          </Grid>
        </Grid>
        <Divider />
        <HomePageTemplate />
      </div>);
  }
}

export const indexPageQuery = graphql`
  query IndexPage {
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
            isPersonal
            description
            author
            difficulty
            emotion
          }
          html
        }
      }
    }
  }
`;
