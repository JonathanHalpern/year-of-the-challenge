import React from 'react'
import styled from 'styled-components'
import Card, { CardContent } from 'material-ui/Card'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import ImageWithOverlay from './ImageWithOverlay'
import failedStamp from '../../static/img/Functional/stamp-failed.png'

const StyledCard = styled(Card)`
  cursor: pointer;
`

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1em;
`

// <ImageWithOverlay
//   className="media-image"
//   baseImage={props.post.frontmatter.evidenceImage}
//   overlayImage={failedStamp}
//   showOverlay={props.post.frontmatter.isFailed}
// />

const CompletedItem = props =>
  console.log(props.post.frontmatter) || (
    <Link to={props.post.frontmatter.path}>
      <StyledCard className="completed-item">
        <CardContent>
          <Img
            sizes={props.post.frontmatter.evidenceImage.childImageSharp.sizes}
            title={`Photo by Ken Treloar on Unsplash`}
            style={{ height: 200 }}
          />
          <ItemTitle type="headline" component="h3">
            {props.post.frontmatter.title}
          </ItemTitle>
        </CardContent>
      </StyledCard>
    </Link>
  )

export default CompletedItem
