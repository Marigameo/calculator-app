import React from 'react';
import Calculator from './components/Calculator/Calculator'
import ColorSwitcher from './components/ColorSwitcher/ColorSwitcher'
import './styles/common.css';

function App() {
  return (
    <div className="App">
      <ColorSwitcher />
      <Calculator />
    </div>
  );
}

export default App;
