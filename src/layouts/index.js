import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
// http://www.lib.utexas.edu/maps/historical/asia_1808.jpg
const Background = styled.div`
  background-image: url(https://images.unsplash.com/photo-1502099530544-2b61cbaed85c?auto=format&fit=crop&w=1498&q=80);
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
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Background />
    <Helmet title="Home | Year of the Challenge" />
    <Navbar />
    <BodyWrapper>{children()}</BodyWrapper>
  </div>
);

export default TemplateWrapper;
