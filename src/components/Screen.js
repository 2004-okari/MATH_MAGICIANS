import PropTypes from 'prop-types';

function Screen({ displayValue }) {
  return (
    <div className="screen">{displayValue}</div>
  );
}

Screen.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Screen;
