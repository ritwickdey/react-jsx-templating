# React Jsx Templating

> React Jsx Templating is a simple library, inspired by Angular :)

[![NPM](https://img.shields.io/npm/v/react-jsx-templating.svg)](https://www.npmjs.com/package/react-jsx-templating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/ritwickdey/react-jsx-templating.svg?branch=master)](https://travis-ci.com/ritwickdey/react-jsx-templating)

`React Jsx Templating` will give you templating syntax like Angular `*ngIf`

**_Live Example: [Open in Codesandbox](https://codesandbox.io/s/j312l1m2x9)_**

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
// Note: named import. There are total 118 Elements
import { Fragment, Div, P, Button, Br, Span } from 'react-jsx-templating';
```

## Syntax

- If-else

```diff
  let isEnglish = false;
+ <EnglishNewsPaper $if={isEnglish} $else={SpanishNewsPaper} />
```

- switch-case

```diff
    let testValue = 'c';
+   <Div $switch={testValue}>
+     <div $case={'a'}>A</div>
+     <div $case={'b'}>B</div>
+     <div $case={'c'}>C</div>
+     <div $default>No Match</div>
+   </Div>
```

- for-loop

```diff
    let people = [{id: 1, name:'Ritwick'}, {id:2, name:'Akash'}]
+    <Div $for={people} $key={person => person.id}>
+      {person => <div>{person.name}<div>}
+    </Div>
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

- **If-Else Templating**

```jsx
import React, { Component } from 'react';
import { Div, Fragment, Button, Br } from 'react-jsx-templating';
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
        <Fragment $if={isEngLang} $else={<>Hola!</>}>
          Hello!
        </Fragment>
        <EnglishNewsPaper $if={isEngLang} $else={SpanishNewsPaper} />
        <Button onClick={this.toogleLanguage}>Toggle Language</Button>
      </div>
    );
  }
}
```

- **For Loop**

```jsx
import React from 'react';
import { Div } from 'react-jsx-templating';
import { Article } from './Components';

function ExampleForLoop() {
  return (
    <Div $for={Articles} $key={({ id }) => id}>
      {article => <Article article={article} />}
    </Div>
  );
}
```

## What's next ?

- ~~Switch Case~~ (added)
- ~~Loop~~ (added)
- ~~Fragment~~ (added)

## License

MIT © [ritwickdey](https://github.com/ritwickdey)
