import React from 'react';
import IfElse from './components/IfElse';
import SwitchCase from './components/SwitchCase';

function App() {
  return (
    <div>
      <section>
        <h2>If-Else Example</h2>
        <IfElse />
      </section>

      <section>
        <h2>Switch-Case Example</h2>
        <SwitchCase />
      </section>
    </div>
  );
}

export default App;
