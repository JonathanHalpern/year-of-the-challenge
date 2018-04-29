import React from 'react';

const CommentItem = props => (
  <div>
    <p>
      {props.name}: {props.message}
    </p>
  </div>
);

export default CommentItem;
