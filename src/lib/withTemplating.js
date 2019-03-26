import React from 'react';

const withTemplating = Component => {
  const Templating = props => {
    const { $if, $else, ...otherProps } = props;

    if (typeof $if === 'undefined' || $if) {
      return <Component {...otherProps} />;
    }

    if (!$if) {
      if (typeof $else === 'function') {
        const Else = $else;
        return <Else {...otherProps} />;
      }

      return $else || null;
    }
  };

  Templating.displayName = `WithTemplating(${Component.displayName || Component.name})`;
  return Templating;
};

export default withTemplating;
