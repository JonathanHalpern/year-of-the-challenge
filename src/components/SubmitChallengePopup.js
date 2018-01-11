import React from 'react';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Dialog, {
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const SubmitChallenge = ({ isOpen, handleClose }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth
  >
    <DialogTitle id="responsive-dialog-title">Send us a Challenge!</DialogTitle>
    <DialogContent>
      <form
        name="newChallenges"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
      >
        <input style={{ display: 'none' }} type="text" name="form-name" value="newChallenges" />
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
        <SubmitButton color="primary" raised type="submit">
          Send
        </SubmitButton>
      </form>
    </DialogContent>
  </Dialog>
);

export default SubmitChallenge;
