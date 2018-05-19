import React from 'react';
import styled from 'styled-components';
import Card, { CardContent } from 'material-ui/Card';
import Link from 'gatsby-link';
import ImageWithOverlay from './ImageWithOverlay';
import failedStamp from '../../static/img/site/stamp-failed.png';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1em;
`;

const CompletedItem = props => (
  <Link to={props.post.frontmatter.path}>
    <StyledCard className="completed-item">
      <ImageWithOverlay
        className="media-image"
        baseImage={props.post.frontmatter.evidenceImage.childImageSharp.sizes}
        overlayImage={failedStamp}
        showOverlay={props.post.frontmatter.isFailed}
      />
      <CardContent>
        <ItemTitle type="headline" component="h3">
          {props.post.frontmatter.title}
        </ItemTitle>
      </CardContent>
    </StyledCard>
  </Link>
);

export default CompletedItem;
