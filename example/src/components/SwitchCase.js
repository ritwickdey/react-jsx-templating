import React from 'react';
import { Div } from 'react-jsx-templating';

function SwitchCase() {
  const test = 'a';
  return (
    <div className="App">
      <Div $switch={test}>
        <div $case={'a'}>A</div>
        <div $case={'b'}>B</div>
        <div $case={'c'}>C</div>
        <div $case={'d'}>D</div>
        <div $default>Default</div>
      </Div>
    </div>
  );
}

export default SwitchCase;
