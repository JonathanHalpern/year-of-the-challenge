import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import Content, { HTMLContent } from '../components/Content';

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

export default ({ isOpen, handleClose, post }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth
  >
    {
      console.log(post)
    }
    <DialogTitle id="responsive-dialog-title">{post.frontmatter.title}</DialogTitle>
    <DialogContent>
      {/* <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
      </DialogContentText> */}
      <HTMLContent content={post.html} />
      <p>completed: {post.isCompleted ? 'yes' : 'no'}</p>
    </DialogContent>
  </Dialog>
);
