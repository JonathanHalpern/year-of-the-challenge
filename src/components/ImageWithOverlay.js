import React from 'react';
import styled from 'styled-components';

import { CardMedia } from 'material-ui/Card';

const Container = styled.div`
  position: relative;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const OverlayImage = styled.img`
  position: absolute;
  z-index: 2;
  opacity: 0.7;
  top: 0;
`;

export default ({ baseImage, overlayImage, showOverlay }) => (
  <Container>
    <StyledCardMedia
      className="media-image"
      image={baseImage}
    />
    {
      showOverlay && <OverlayImage
        src={overlayImage}
      />
    }
  </Container>
);
