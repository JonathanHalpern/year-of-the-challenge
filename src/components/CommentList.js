import React from 'react';
import CommentItem from './CommentItem';

const CommentList = props => (
  <div>
    <p>Comments</p>
    <ul>
      {
        props.comments.map(comment => (
          <CommentItem comment={comment.node} />
        ))
      }
    </ul>
  </div>
);

export default CommentList;
