import React from 'react';
import CommentItem from './CommentItem';

const CommentList = props => (
  <div>
    {
      props.comments.map(comment => (
        <CommentItem
          name={comment.node.frontmatter.name}
          html={comment.node.html}
          date={comment.node.frontmatter.date}
          key={comment.node.id}
        />
      ))
    }
  </div>
);

export default CommentList;
