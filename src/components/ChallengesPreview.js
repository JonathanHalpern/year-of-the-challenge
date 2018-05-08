import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import CompletedCarousel from '../components/CompletedCarousel';
import IncompletedCarousel from '../components/IncompletedCarousel';

const Container = styled.div`
  margin-bottom: 25px;
`;

const ChallengesPreview = ({ completedChallenges, incompleteChallenges, comments }) => (
  <Container>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6} md={6}>
        <CompletedCarousel
          posts={completedChallenges}
          comments={comments}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <IncompletedCarousel
          posts={incompleteChallenges}
        />
      </Grid>
    </Grid>
  </Container>
);

export default ChallengesPreview;
