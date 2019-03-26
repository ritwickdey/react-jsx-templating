# React Jsx Templating

> React Jsx Templating is a simple library, inspired by Angular :)

[![NPM](https://img.shields.io/npm/v/react-jsx-templating.svg)](https://www.npmjs.com/package/react-jsx-templating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`React Jsx Templating` will give you templating syntax like Angular `*ngIf`

## Install

```bash
npm install --save react-jsx-templating
```

## Usage

- **If-Else Templating**

```jsx
import React, { Component } from 'react';
import { Div, P, Button, Br } from 'react-jsx-templating';
import EnglishNewsPaper from './EnglishNewsPaper';
import SpanishNewsPaper from './SpanishNewsPaper';

class Example extends Component {
  state = {
    isEngLang: true,
    hideToggler: false
  };

  toogle = stateKey => () => {
    this.setState(oldState => ({[stateKey]: !oldState[stateKey]}))
  }

  render() {
    const { isEngLang, hideToggler } = this.state;
    return ( 
      <Div>
        <P $if={isEngLang} $else={() => <P>Hola!</P>}> {/* OR, $else={<P>Hola!</P>} */}
          Hello!
        </P>
      
        <EnglishNewsPaper $if={isEngLang} $else={SpanishNewsPaper} />  {/* NOTE, $else={Component} */}
      
        <Button $if={!hideToggler} onClick={this.toogle('isEngLang')}>
          Toggle Language
        </Button>

        <Br $if={!hideToggler} />
        <Br $if={!hideToggler}/>
        
        <Button onClick={this.toogle('hideToggler')}>
          <Span $if={hideToggler}>Show Toggler</Span>
          <Span $if={!hideToggler}>Hide Toggler</Span>
        </Button>
      </Div>
    );
  }
}

```

```jsx

// in ./EnglishNewsPaper.js
import { withTemplating } from 'react-jsx-templating';

class EnglishNewsPaper extends Component  {
  render() {
    return "English News";
  }
}

export default withTemplating(EnglishNewsPaper); // same thing need to be done in `SpanishNewsPaper` component. I'm not repeating, but you got the point.

```


## What's next ?

- Switch Case

## License

MIT © [ritwickdey](https://github.com/ritwickdey)
