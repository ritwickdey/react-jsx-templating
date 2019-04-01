import React from 'react';
import { isTrusy } from './utils';

export function doIfElseOperation(props, Component) {
  const { $if, $else, ...restProps } = props;

  if (isTrusy($if)) {
    return React.createElement(Component, restProps);
  }

  if (!$if) {
    if (typeof $else === 'function') {
      return React.createElement($else, restProps);
    }
    return $else || null;
  }
}
