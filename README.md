# React Jsx Templating

> React Jsx Templating is a simple library, inspired by Angular :)

[![NPM](https://img.shields.io/npm/v/react-jsx-templating.svg)](https://www.npmjs.com/package/react-jsx-templating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`React Jsx Templating` will give you templating syntax like Angular `*ngIf`

**_Live Example: https://codesandbox.io/s/j312l1m2x9_**

## Install

```bash
npm install --save react-jsx-templating
```

## Usage

- **Use HOC**

```jsx
import withTemplating from 'react-jsx-templating'; //Note: default import
class MyComponent extends Component  {
  render()
    return "foo";
  }
}

export default withTemplating(MyComponent);
```

- Use Wrapper HTML tags

```jsx
import { Div, P, Button, Br, Span } from 'react-jsx-templating'; // Note: named import. There are total 118 Elements
```

## Syntax

- If-else

```diff jsx
+ <EnglishNewsPaper $if={condition} $else={SpanishNewsPaper} />
```

- switch-case

```diff
+   <Div $switch={testValue}>
+     <div $case={'a'}>A</div>
+     <div $case={'b'}>B</div>
+     <div $case={'c'}>C</div>
+     <div $default>No Match</div>
+   </Div>
```

## Examples

- **Switch-Case Templating**

```jsx
import React, { useState } from 'react';
import { Div } from 'react-jsx-templating';

function ExampleSwitchCase() {
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

```


* **If-Else Templating**

```jsx
import React, { Component } from 'react';
import { Div, P, Button, Br } from 'react-jsx-templating';
import { EnglishNewsPaper, SpanishNewsPaper } from './Components';

class ExampleIfElse extends Component {
  state = {
    isEngLang: true
  };

  toogleLanguage = () => {
    this.setState(oldState => ({ isEngLang: !oldState.isEngLang }));
  };

  render() {
    const { isEngLang } = this.state;
    return (
      <div>
        <P $if={isEngLang} $else={<p>Hola!</p>}>
          Hello!
        </P>
        <EnglishNewsPaper $if={isEngLang} $else={SpanishNewsPaper} />
        <Button onClick={this.toogleLanguage}>Toggle Language</Button>
      </div>
    );
  }
}
```

## What's next ?

- ~~Switch Case~~ (added)
- Loop

## License

MIT © [ritwickdey](https://github.com/ritwickdey)
