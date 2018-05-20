import React from 'react';
import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import { BlogPostTemplate } from '../templates/blog-post';

// import my homemade widget
import {
  CustomPathImageControl,
  CustomPathImagePreview,
} from './customPathImage';

// register it to be able tu use it in NetlifyCMS
CMS.registerWidget(
  'custompathimage',
  CustomPathImageControl,
  CustomPathImagePreview
);

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
