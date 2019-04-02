import React from 'react';
import { isTrusy, isUndefined } from '../utils';

export function doSwitchCaseOperation(props, Component) {
  const { $switch: switchValue, children, ...restProps } = props;

  let targetChildNode = null;

  const totalNoOfNode = React.Children.count(children);
  for (let i = 0; i < totalNoOfNode; i++) {
    const child = totalNoOfNode === 1 ? children : children[i];

    if (!React.isValidElement(child)) continue;

    const { $case: caseValue, $default: defaultValue } = child.props;

    if (isUndefined(caseValue) && isUndefined(defaultValue)) {
      throw new Error('$case or $default is missing', child);
    }

    if (isTrusy(defaultValue) || caseValue === switchValue) {
      targetChildNode = child;
      break;
    }
  }

  if (targetChildNode) {
    const { $case, $default, ...childProps } = targetChildNode.props;
    targetChildNode = React.cloneElement(targetChildNode, childProps);
  }

  return React.createElement(Component, restProps, targetChildNode);
}
