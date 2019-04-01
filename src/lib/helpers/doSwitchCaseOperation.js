import React from 'react';
import { isTrusy, isUndefined } from './utils';

export function doSwitchCaseOperation(props, Component) {
  const { $switch, children, ...restProps } = props;
  const switchValue = $switch;
  let targetChildNode = null;

  const totalNoOfNode = React.Children.count(children);
  for (let i = 0; i < totalNoOfNode; i++) {
    const child = totalNoOfNode === 1 ? children : children[i];

    if (!React.isValidElement(child)) continue;

    const { $case, $default } = child.props;

    if (isUndefined($case) && isUndefined($default)) {
      throw new Error('$case or $default is missing', child);
    }

    if (isTrusy($default) || $case === switchValue) {
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
