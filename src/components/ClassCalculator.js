import React from 'react';
import calculate from './../logic/calculate';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleClick = (event) => {
      const result = calculate(this.state, event.target.innerHTML);

      this.setState(result);
    };

    return (
      <div className="calculator-div">
        <div className="result">
          <span> {this.state.total}</span>
          <span> {this.state.operation}</span>
          <span> {this.state.next}</span>
        </div>
        <Button content="AC" handleClick={handleClick} />
        <Button content="+/-" handleClick={handleClick} />
        <Button content="%" handleClick={handleClick} />
        <Button content="÷" classes="highlight" handleClick={handleClick} />
        <Button content="7" handleClick={handleClick} />
        <Button content="8" handleClick={handleClick} />
        <Button content="9" handleClick={handleClick} />
        <Button content="x" handleClick={handleClick} classes="highlight" />
        <Button content="4" handleClick={handleClick} />
        <Button content="5" handleClick={handleClick} />
        <Button content="6" handleClick={handleClick} />
        <Button content="-" handleClick={handleClick} classes="highlight" />
        <Button content="1" handleClick={handleClick} />
        <Button content="2" handleClick={handleClick} />
        <Button content="3" handleClick={handleClick} />
        <Button content="+" handleClick={handleClick} classes="highlight" />
        <Button content="0" handleClick={handleClick} classes="zero" />
        <Button content="." handleClick={handleClick} />
        <Button content="=" handleClick={handleClick} classes="highlight" />
      </div>
    );
  }
}

export default Calculator;
