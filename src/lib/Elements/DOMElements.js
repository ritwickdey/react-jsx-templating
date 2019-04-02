import React from 'react';
import { HTML_TAGS } from '../utils/html-tags';
import withTemplating from '../withTemplating';

const DOMElements = {};

HTML_TAGS.forEach(tag => {
  const Fn = props => {
    const { $if, $switch, $case, $default, $else, $key, $for, ...rest } = props;
    return React.createElement(tag, rest);
  };
  const Tag = capitalCase(tag);
  Fn.displayName = Tag;
  DOMElements[Tag] = withTemplating(Fn);
});

function capitalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default DOMElements;
