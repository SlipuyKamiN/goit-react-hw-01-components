import PropTypes from 'prop-types';

const Data = ({ stats }) => {
  return (
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}%</span>
    </li>
  );
};
export default Data;

Data.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string,
};
