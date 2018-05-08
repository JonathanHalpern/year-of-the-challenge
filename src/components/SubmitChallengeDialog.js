import React from 'react';
import styled from 'styled-components';
import Dialog, {
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import SubmitChallengeForm from './SubmitChallengeForm';

const StyledDialog = styled(Dialog)`
  div:nth-child(2) {
    max-width: 700px;
    border-radius: 16px;
  }
`;

const SubmitChallengeDialog = ({ isOpen, handleClose }) => (
  <StyledDialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth
    transitionDuration={750}
  >
    <DialogTitle id="responsive-dialog-title">Send us a Challenge!</DialogTitle>
    <DialogContent>
      <SubmitChallengeForm />
    </DialogContent>
  </StyledDialog>
);

export default SubmitChallengeDialog;
