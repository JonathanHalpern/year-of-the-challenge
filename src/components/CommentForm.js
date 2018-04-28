import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SubmitButton = styled(Button)`
  margin-top: 20px!important;
`;

const CommentForm = props => (
  <form method="POST" action="https://api.staticman.net/v2/entry/JonathanHalpern/year-of-the-challenge/master/comments">
    <input name="fields[post]" type="hidden" value={props.postName} />
    <input name="options[redirect]" type="hidden" value="http://yearofthechallenge.com" />
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          label="Your name"
          name="fields[name]"
          type="text"
        />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          label="Comment"
          name="fields[message]"
          type="text"
          multiline
          rows={2}
        />
      </Grid>
    </Grid>
    <SubmitButton color="primary" variant="raised" type="submit">
      Post
    </SubmitButton>
  </form>
);

export default CommentForm;
