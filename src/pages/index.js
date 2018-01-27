import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Content, { HTMLContent } from '../components/Content';
import HomePageTemplate from '../templates/home-page';
import ChallengePreview from '../components/ChallengePreview';

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
    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <h1>Year of the Challenge</h1>
        <ChallengePreview posts={posts} />
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
