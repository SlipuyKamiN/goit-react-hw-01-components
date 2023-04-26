import PropTypes from 'prop-types';
import {
  StatisticsTable,
  Title,
  StatList,
  StatItem,
  StatName,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsTable>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(element => (
          <StatItem key={element.id}>
            <StatName>{element.label}</StatName>
            <Percentage>{element.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsTable>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
