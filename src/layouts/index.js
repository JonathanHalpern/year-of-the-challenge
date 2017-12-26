import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const BodyWrapper = styled.div`
padding: 15px;
margin: 0 auto;
max-width: 800px;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Year of the Challenge" />
    <Navbar />
    <BodyWrapper>{children()}</BodyWrapper>
  </div>
);

export default TemplateWrapper;
