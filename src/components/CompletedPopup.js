import React from 'react';
import styled from 'styled-components';
import Dialog, {
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import { HTMLContent } from '../components/Content';

const StyledDialogContent = styled(DialogContent)`
  p {
    display: flex;
    img {
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

const StyledDialog = styled(Dialog)`
  div:nth-child(2) {
    max-width: 700px;
    border-radius: 16px;
  }
`;

export default ({ isOpen, handleClose, post }) => (
  <StyledDialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth
  >
    <DialogTitle id="responsive-dialog-title">{post.frontmatter.title}</DialogTitle>
    <StyledDialogContent>
      <HTMLContent content={post.html} />
    </StyledDialogContent>
  </StyledDialog>
);
