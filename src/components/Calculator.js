import React, { useState } from 'react';
import calculate from './../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (event) => {
    const result = calculate(
      { total, next, operation },
      event.target.innerHTML
    );
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-div">
        <div className="result">
          <span> {total}</span>
          <span> {operation}</span>
          <span> {next}</span>
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
    </div>
  );
};

export default Calculator;
