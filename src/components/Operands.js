import PropTypes from 'prop-types';

function Operand({ clickHandle }) {
  return (
    <div className="operator">
      <button type="button" className="button" onClick={clickHandle}>÷</button>
      <button type="button" className="button" onClick={clickHandle}>x</button>
      <button type="button" className="button" onClick={clickHandle}>-</button>
      <button type="button" className="button" onClick={clickHandle}>+</button>
      <button type="button" className="button" onClick={clickHandle}>=</button>
    </div>
  );
}

Operand.propTypes = { clickHandle: PropTypes.func.isRequired };

export default Operand;
