import React from 'react';
import { isUndefined } from './utils';
import { doIfElseOperation, doForLoopOperation, doSwitchCaseOperation } from './helperFns';

const withTemplating = Component => {
  const Templating = props => {
    const { $if, $switch, $for, ...restProps } = props;

    if (!isUndefined($if)) {
      return doIfElseOperation(props, Component);
    }

    if (!isUndefined($switch)) {
      return doSwitchCaseOperation(props, Component);
    }

    if (!isUndefined($for)) {
      return doForLoopOperation(props, Component);
    }

    return React.createElement(Component, restProps);
  };

  Templating.displayName = `withTemplating(${Component.displayName || Component.name})`;
  return Templating;
};

export default withTemplating;
