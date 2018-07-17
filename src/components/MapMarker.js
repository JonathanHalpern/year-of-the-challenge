import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { OverlayView, Marker } from 'react-google-maps';

const OverlayContainer = styled.div`
  background: white;
  border: 1px solid #ccc;
  padding: 5px;
  min-width: 125px;
  border-radius: 10px;
  :hover {
    background: #97bbee;
  }
  img {
    border-radius: 5px;
  }
`;

const Title = styled.h2`
  margin: 0 0 5px 0;
  font-size: 0.8rem;
`;

const Location = styled.p`
  margin: 0;
`;

const Date = styled.p`
  margin: 0;
  font-style: italic;
`;

const getPixelPositionOffset = (width, height) => ({
  x: 20,
  y: -height / 2,
});

const MapOverlay = ({ frontmatter, onToggle, isToggled }) => (
  <div>
    <Marker
      position={{ lat: frontmatter.coordinates[0], lng: frontmatter.coordinates[1] }}
      onClick={onToggle}
      defaultZoomOnClick
    />
    {isToggled && (
      <OverlayView
        position={{ lat: frontmatter.coordinates[0], lng: frontmatter.coordinates[1] }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <OverlayContainer>
          <Link to={frontmatter.path}>
            <Title>{frontmatter.title}</Title>
            <Location>{frontmatter.location}</Location>
            <Date>{frontmatter.date}</Date>
            <Img sizes={frontmatter.evidenceImage.childImageSharp.sizes} style={{ height: 100 }} />
          </Link>
        </OverlayContainer>
      </OverlayView>
    )}
  </div>
);

export default MapOverlay;
