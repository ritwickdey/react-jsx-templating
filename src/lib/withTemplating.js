import React from 'react';

const withTemplating = Component => {
  const Templating = props => {
    const { $if, $switch, ...restProps } = props;

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

function doIfElseOperation(props, Component) {
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

function doSwitchCaseOperation(props, Component) {
  const { $switch, children, ...restProps } = props;
  const switchValue = $switch;
  let targetChildNode = null;
  const totalNoOfNode = React.Children.count(children);

  for (let i = 0; i < totalNoOfNode; i++) {
    const child = totalNoOfNode === 1 ? children : children[i];
    if(!React.isValidElement(child)) continue;

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

// Utils Function
function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function isTrusy(obj) {
  return !!obj;
}

export default withTemplating;
