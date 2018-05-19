import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import Img from 'gatsby-image';
import Navbar from '../components/Navbar';
import FixedOptions from '../components/FixedOptions';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

const LeftWrapper = styled.div`
  @media (min-width: 1224px) {
    width: calc(100% - 340px);
  }
`;

const BodyWrapper = styled.div`
  padding: 30px;
  margin: 85px 15px 50px;
  max-width: 800px;
  background: white;
  @media (min-width: 600px) {
    padding: 15px;
    margin: 100px 30px 50px;
  }
  @media (min-width: 850px) {
    padding: 30px;
    margin: 100px auto 50px;
  }
  @media (min-width: 1224px) {
    margin: 50px auto;
  }
`;

const TemplateWrapper = ({ children, data }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      {data && (
        <Img
          sizes={data.backgroundImage.resolutions}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      )}
      <Helmet title="Home | Year of the Challenge">
        <meta
          name="description"
          content="Read about how we complete ridiculous and embarassing challenges as we travel the world. You can also send us a challenge of your own"
        />
      </Helmet>
      <Navbar />
      <LeftWrapper>
        <BodyWrapper>
          {children()}
          <FixedOptions />
        </BodyWrapper>
      </LeftWrapper>
    </div>
  </MuiThemeProvider>
);

export default TemplateWrapper;

export const layoutQuery = graphql`
  query IndexQueryPage {
    backgroundImage: imageSharp(id: { regex: "/yellow_mountains/" }) {
      resolutions(width: 1280) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
