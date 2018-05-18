import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  position: relative;
`;

const OverlayImage = styled.img`
  position: absolute;
  z-index: 2;
  opacity: 0.7;
  top: 0;
`;

export default ({ baseImage, overlayImage, showOverlay }) => (
  <Container>
    <Img sizes={baseImage} style={{ height: 200 }} />
    {showOverlay && <OverlayImage src={overlayImage} />}
  </Container>
);
