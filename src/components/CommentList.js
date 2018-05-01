import React from 'react';
import CommentItem from './CommentItem';

const CommentList = props => (
  <div>
    {
      props.comments.map(comment => (
        <CommentItem
          name={comment.node.frontmatter.name}
          message={comment.node.excerpt}
          date={comment.node.frontmatter.date}
          key={comment.node.id}
        />
      ))
    }
  </div>
);

export default CommentList;
