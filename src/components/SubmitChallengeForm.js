import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SubmitButton = styled(Button)`
  margin-top: 20px!important;
`;

const SubmitChallengeForm = () => (
  <form
    name="newChallenges"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    <input
      readOnly
      style={{ display: 'none' }}
      type="text"
      name="form-name"
      value="newChallenges"
    />
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          label="Your name"
          name="name"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          label="Email (optional)"
          name="email"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="challenge"
          label="Your challenge"
          name="challenge"
          fullWidth
          multiline
          rows={3}
        />
      </Grid>
    </Grid>
    <SubmitButton color="primary" variant="raised" type="submit">
      Send
    </SubmitButton>
  </form>
);

export default SubmitChallengeForm;
