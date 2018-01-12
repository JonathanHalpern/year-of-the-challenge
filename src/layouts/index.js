import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import FixedOptions from '../components/FixedOptions';
import './index.css';

const Background = styled.div`
  background-image: url('img/Functional/chinese_street.jpg');
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

const LeftWrapper = styled.div`
  @media(min-width: 1224px) {
    width: calc(100% - 340px);
  }
`;

const BodyWrapper = styled.div`
  padding: 30px;
  margin: 50px auto;
  max-width: 800px;
  background: white;
  @media(max-width: 850px) {
    margin: 30px;
  }
  @media(max-width: 700px) {
    margin: 15px;
    padding: 15px;
  }
  @media(max-width: 1223px) {
    margin-top: 56px;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Background />
    <Helmet title="Home | Year of the Challenge" />
    <Navbar />
    <LeftWrapper>
      <BodyWrapper>{children()}</BodyWrapper>
    </LeftWrapper>
    <FixedOptions />
  </div>
);

export default TemplateWrapper;
