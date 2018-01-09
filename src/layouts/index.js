import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import './index.css';

const Background = styled.div`
  background-image: url('img/Functional/chinese_street.jpg');
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
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
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Background />
    <Helmet title="Home | Year of the Challenge" />
    <Navbar />
    <BodyWrapper>{children()}</BodyWrapper>
    <SignUp />
  </div>
);

export default TemplateWrapper;
