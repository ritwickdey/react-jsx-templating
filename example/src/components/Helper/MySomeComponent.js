import React from 'react';
import withTemplating from 'react-jsx-templating';

function MySomeComponent(props) {
  return <p>{props.title || props.children}</p>;
}

export default withTemplating(MySomeComponent);
