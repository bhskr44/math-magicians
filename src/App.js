import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Calculator />
      </div>
    );
  }
}

export default App;
