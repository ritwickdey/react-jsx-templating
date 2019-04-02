import React from 'react';
import { isTrusy } from '../utils';

export function doIfElseOperation(props, Component) {
  const { $if: condition, $else: elseBlock, ...restProps } = props;

  if (isTrusy(condition)) {
    return React.createElement(Component, restProps);
  }

  if (typeof elseBlock === 'function') {
    return React.createElement(elseBlock, restProps);
  }
  return elseBlock || null;
}
