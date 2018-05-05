import React, { Component } from 'react';
import Script from 'react-load-script';
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import { HTMLContent } from '../components/Content';
import ChallengePreview from '../components/ChallengePreview';
import Logo from '../../static/img/Functional/logo.png';
import Fragments from '../graphql/fragments';

const StyledLogo = styled.img`
  height: 80px;
  width: initial;
  margin: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  @media(max-width: 600px) {
    align-items: center;
    h1 {
      margin: 0;
    }
  }
`;

export default class IndexPage extends Component {
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
    const { homePageMarkdown, comments, allMarkdownRemark: { edges: posts } } = this.props.data;
    console.log(this.props.data)
    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <LogoContainer>
          <StyledLogo src={Logo} />
          <h1>Year of the Challenge</h1>
        </LogoContainer>
        <ChallengePreview posts={posts} comments={comments} />
        <Divider />
        <HTMLContent
          content={homePageMarkdown.html}
        />
      </div>);
  }
}

export const indexPageQuery = graphql`
  query IndexPage($path: String!) {
    homePageMarkdown: markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...MarkdownFrontmatter
    },
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          ...BlogPostFragment
          html
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
