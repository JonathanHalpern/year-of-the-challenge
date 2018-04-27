import React from 'react';
import Script from 'react-load-script';
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import HomePageTemplate from '../templates/home-page';
import ChallengePreview from '../components/ChallengePreview';
import Logo from '../../static/img/Functional/logo.png';

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
    const { edges: posts } = this.props.data.allMarkdownRemark;
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
            isFailed
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
