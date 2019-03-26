import React, { useState } from 'react';

import { Div, P, Button, Br, Span } from 'react-jsx-templating';
import MySomeComponent from './components/MySomeComponent';

function App() {
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
      <Button $if={showToggler} onClick={() => setShow(v => !v)}>
        Toogle
      </Button>
      <Br $if={showToggler} />
      <Br $if={showToggler} />
      <Button onClick={() => setShowToggler(v => !v)}>
        <Span $if={!showToggler} $else={<Span>Hide Toggler</Span>}>
          Show Toggler
        </Span>
      </Button>
    </Div>
  );
}

export default App;
