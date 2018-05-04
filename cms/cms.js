import React from 'react';
import CMS from 'netlify-cms';

import { BlogPostTemplate } from 'site/templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    isCompleted={entry.getIn(['data', 'isCompleted'])}
    title={entry.getIn(['data', 'title'])}
    isCms
  />
);

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('blog', BlogPostPreview);
