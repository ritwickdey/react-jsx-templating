import React, { useState } from 'react';

import { Div, P, Button, Br, Fragment } from 'react-jsx-templating';
import MySomeComponent from './Helper/MySomeComponent';

function IfElse() {
  const [show, setShow] = useState(true);
  const [showToggler, setShowToggler] = useState(true);
  return (
    <Div className="App">
      <Div $if={show} $else={<Div>Hola ^_^</Div>}>
        Hello! :D
      </Div>
      <MySomeComponent $if={show} $else={() => <P>Yay! It works</P>}>
        Welcome here
      </MySomeComponent>
      <Button onClick={() => setShowToggler(v => !v)}>
        <Fragment $if={!showToggler} $else={<>Hide Toggler</>}>
          Show Toggler
        </Fragment>
      </Button>
      <Br $if={showToggler} />
      <Button $if={showToggler} onClick={() => setShow(v => !v)}>
        Toogle Language
      </Button>
    </Div>
  );
}

export default IfElse;
