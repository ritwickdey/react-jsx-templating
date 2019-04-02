import React from 'react';

export function doForLoopOperation(props, Component) {
  const { $for: items, $key: keyFn, ...restProps } = props;

  const children = items.map((item, index, array) => {
    const child = props.children(item, index, array);
    const key = keyFn ? keyFn(item) : child.key;
    return React.cloneElement(child, { key, ...child.props });
  });

  return React.createElement(Component, restProps, children);
}
