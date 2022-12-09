import React from 'react';
import Calculator from './Calculator';
import './css/CalculatorPage.css';

const CalculatorPage = () => (
  <div className="cal-container" id="calc-page">
    <h2>Lets Do some Maths!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
