import React from 'react';

export default ({ content }) => {
  if (typeof (content) === 'string') {
    return (<div
      dangerouslySetInnerHTML={{ __html: content }}
    />);
  }
  return <div>{content}</div>;
};
