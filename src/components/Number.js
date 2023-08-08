import PropTypes from 'prop-types';

function Number({ clickHandle }) {
  return (
    <div className="numbers">
      <button type="button" className="number" onClick={clickHandle}>AC</button>
      <button type="button" className="number" onClick={clickHandle}>+/-</button>
      <button type="button" className="number" onClick={clickHandle}>%</button>
      <button type="button" className="number" onClick={clickHandle}>7</button>
      <button type="button" className="number" onClick={clickHandle}>8</button>
      <button type="button" className="number" onClick={clickHandle}>9</button>
      <button type="button" className="number" onClick={clickHandle}>4</button>
      <button type="button" className="number" onClick={clickHandle}>5</button>
      <button type="button" className="number" onClick={clickHandle}>6</button>
      <button type="button" className="number" onClick={clickHandle}>1</button>
      <button type="button" className="number" onClick={clickHandle}>2</button>
      <button type="button" className="number" onClick={clickHandle}>3</button>
      <button type="button" className="number" onClick={clickHandle}>0</button>
      <button type="button" className="number" onClick={clickHandle}>.</button>
    </div>
  );
}

Number.propTypes = { clickHandle: PropTypes.func.isRequired };

export default Number;
