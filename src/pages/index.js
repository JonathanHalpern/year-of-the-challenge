import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Content, { HTMLContent } from '../components/Content';
import HomePageTemplate from '../templates/home-page';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
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
    console.log(this.props.data)
    // const { data } = this.props;
    // const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="container">
          <HomePageTemplate />
        </div>
      </section>
    );
  }
}

// export const pageQuery = graphql`
//   query IndexQuery {
//     # allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//     #   edges {
//     #     node {
//     #       excerpt(pruneLength: 400)
//     #       id
//     #       frontmatter {
//     #         title
//     #         templateKey
//     #         date(formatString: "MMMM DD, YYYY")
//     #         path
//     #         isCompleted
//     #       }
//     #     }
//     #   }
//     # },
//     markdownRemark(frontmatter: {path: {eq: "/home"}}) {
//        frontmatter {
//          title
//          templateKey
//          date(formatString: "MMMM DD, YYYY")
//          path
//          isCompleted
//          evidenceImage
//        },
//        html
//     }
//   }
// `;
