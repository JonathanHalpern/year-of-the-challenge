import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import CompletedCarousel from '../components/CompletedCarousel';
import IncompletedCarousel from '../components/IncompletedCarousel';

const Container = styled.div`
  margin-bottom: 25px;
`;

class SubmitChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedPosts: this.props.posts.filter(item => (item.node.frontmatter.templateKey === 'blog-post' && item.node.frontmatter.isCompleted)),
      incompletedPosts: this.props.posts.filter(item => (item.node.frontmatter.templateKey === 'blog-post' && !item.node.frontmatter.isCompleted)),
    };
  }
  render() {
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={6}>
            <CompletedCarousel
              posts={this.state.completedPosts}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <IncompletedCarousel
              posts={this.state.incompletedPosts}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default SubmitChallenge;
