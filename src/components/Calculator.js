import './Calculator.css';
import Number from './Number';
import Operand from './Operands';
import Screen from './Screen';

function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <Number />
      <Operand />
    </div>
  );
}

export default Calculator;
