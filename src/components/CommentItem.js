import React from 'react';

const CommentItem = props => console.log(props) || (
  <div>
    <p>
      {props.comment.frontmatter.name}: {props.comment.excerpt}
    </p>
  </div>
);

export default CommentItem;
