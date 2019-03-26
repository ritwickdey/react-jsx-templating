import React from 'react';
import { HTML_TAGS } from './html-tags';
import withTemplating from './withTemplating';

export const Elements = {};

HTML_TAGS.forEach(tag => {
  const Fn = props => React.createElement(tag, props);
  const Tag = capitalCase(tag);
  Fn.displayName = Tag;
  Elements[Tag] = withTemplating(Fn);
});

function capitalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default { ...Elements };