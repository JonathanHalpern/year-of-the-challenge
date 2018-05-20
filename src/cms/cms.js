import React from 'react';
import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

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
