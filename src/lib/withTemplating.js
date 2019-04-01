import React from 'react';
import { doIfElseOperation } from './helpers/doIfElseOperation';
import { doSwitchCaseOperation } from './helpers/doSwitchCaseOperation';
import { isUndefined } from './helpers/utils';

const withTemplating = Component => {
  const Templating = props => {
    const { $if, $switch, $for, ...restProps } = props;

    if (!isUndefined($if)) {
      return doIfElseOperation(props, Component);
    }

    if (!isUndefined($switch)) {
      return doSwitchCaseOperation(props, Component);
    }

    return React.createElement(Component, restProps);
  };

  Templating.displayName = `withTemplating(${Component.displayName || Component.name})`;
  return Templating;
};

export default withTemplating;
