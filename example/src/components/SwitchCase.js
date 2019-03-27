import React, { useState } from 'react';
import { Div } from 'react-jsx-templating';

function SwitchCase() {
  const [animal, setAnimal] = useState('');
  return (
    <div className="App">
      <input
        placeholder={'type `dog` or `cat`'}
        value={animal}
        onChange={e => setAnimal(e.target.value)}
      />
      <Div $if={animal} $else={() => <div>Please type!! </div>}>
        <Div $switch={animal}>
          <div $case={'dog'}>woof-woof 🐕</div>
          <div $case={'cat'}>meows meows 🐈</div>
          <div $default>Ops!! No Match! </div>
        </Div>
      </Div>
    </div>
  );
}

export default SwitchCase;
