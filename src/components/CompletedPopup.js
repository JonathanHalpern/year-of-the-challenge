import React from 'react';
import styled from 'styled-components';
import Dialog, {
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import { HTMLContent } from '../components/Content';

export default ({ isOpen, handleClose, post }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth
  >
    <DialogTitle id="responsive-dialog-title">{post.frontmatter.title}</DialogTitle>
    <DialogContent>
      <HTMLContent content={post.html} />
    </DialogContent>
  </Dialog>
);
