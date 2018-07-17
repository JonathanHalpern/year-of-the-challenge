import React, { Component } from 'react';
import Script from 'react-load-script';
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import { HTMLContent } from '../components/Content';
import ChallengesPreview from '../components/ChallengesPreview';
import Map from '../components/Map';
import Logo from '../../static/img/site/logo.png';

const StyledLogo = styled.img`
  height: 80px;
  width: initial;
  margin: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
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
    const {
      currentPageMarkdown,
      allCommentsMarkdown,
      completedChallengesMarkdownRemark: { edges: completedChallenges },
      incompleteChallengesMarkdownRemark: { edges: incompleteChallenges },
    } = this.props.data;
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
        <ChallengesPreview
          completedChallenges={completedChallenges}
          incompleteChallenges={incompleteChallenges}
          comments={allCommentsMarkdown}
        />
        <Map completedChallenges={completedChallenges} />
        <Divider />
        <HTMLContent content={currentPageMarkdown.html} />
      </div>
    );
  }
}

export const indexPageQuery = graphql`
  query IndexPage($path: String!) {
    ...CurrentPageFragment
    ...CompletedChallengesMarkdownFragment
    ...IncompleteChallengesMarkdownFragment
  }
`;
