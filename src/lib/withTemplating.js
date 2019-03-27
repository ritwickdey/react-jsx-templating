import React from 'react';

const withTemplating = Component => {
  const Templating = props => {
    const { $if, $else, ...restProps } = props;

    if (typeof $if === 'undefined' || $if) {
      return React.createElement(Component, restProps)
    }

    if (!$if) {
      if (typeof $else === 'function') {
        return React.createElement($else, restProps);
      }

      return $else || null;
    }
  };

  Templating.displayName = `WithTemplating(${Component.displayName || Component.name})`;
  return Templating;
};

export default withTemplating;
