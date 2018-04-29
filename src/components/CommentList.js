import React from 'react';
import CommentItem from './CommentItem';

const CommentList = props => (
  <div>
    <ul>
      {
        props.comments.map(comment => (
          <CommentItem
            name={comment.node.frontmatter.name}
            message={comment.node.excerpt}
            key={comment.node.id}
          />
        ))
      }
    </ul>
  </div>
);

export default CommentList;
