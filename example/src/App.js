import React from 'react';
import IfElse from './components/IfElse';
import SwitchCase from './components/SwitchCase';
import ForLoop from './components/ForLoop';

function App() {
  return (
    <div>
      <section>
        <h2>If-Else Example</h2>
        <IfElse />
      </section>
      <hr></hr>

      <section>
        <h2>Switch-Case Example</h2>
        <SwitchCase />
      </section>
      <hr></hr>

      <section>
        <h2>For Loop Example</h2>
        <ForLoop />
      </section>
    </div>
  );
}

export default App;
