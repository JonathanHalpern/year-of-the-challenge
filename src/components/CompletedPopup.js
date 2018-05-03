import React from 'react';
import styled from 'styled-components';
import Dialog, {
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import HTMLContent from '../components/Content';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const StyledDialogContent = styled(DialogContent)`
  p {
    display: flex;
    img {
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
    }
  }
  .iframeContainer {
    position:relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
    iframe, object, embed {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
  }
`;

const StyledDialog = styled(Dialog)`
  div:nth-child(2) {
    max-width: 700px;
    border-radius: 16px;
  }
`;

export default ({ isOpen, handleClose, post, comments }) => (
  <StyledDialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    fullWidth
    transitionDuration={750}
  >
    <DialogTitle id="responsive-dialog-title">{post.frontmatter.title}</DialogTitle>
    <StyledDialogContent>
      <HTMLContent content={post.html} />
      <Divider />
      {
        comments && <CommentList comments={comments} />
      }
      <CommentForm postName={post.frontmatter.path} />
    </StyledDialogContent>
  </StyledDialog>
);
