import React from 'react';
import IfElse from './components/IfElse';
import SwitchCase from './components/SwitchCase';

function App() {
  return (
    <div>
      <section>
        <header>If else</header>
        <IfElse />
      </section>

      <section>
        <header>Switch Case</header>
        <SwitchCase />
      </section>
    </div>
  );
}

export default App;
