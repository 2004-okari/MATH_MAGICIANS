import React, { useState } from 'react';
import './Calculator.css';
import Number from './Number';
import Operand from './Operands';
import Screen from './Screen';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandle = (e) => {
    const selected = e.target.textContent;
    const value = calculate(calculatorData, selected);
    setCalculatorData(value);
  };

  const { total, operation, next } = calculatorData;

  const displayValue = next || operation || total || 0;

  return (
    <div className="calculator">
      <Screen displayValue={displayValue} />
      <Number clickHandle={clickHandle} />
      <Operand clickHandle={clickHandle} />
    </div>
  );
}

export default Calculator;
