import PropTypes from 'prop-types';
import css from './Event.module.css';

const StatisticEvent = ({ events }) => {
  console.log(events);
  return (
    <ul className={css.statsList}>
      {events.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
          key={id}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default StatisticEvent;
StatisticEvent.prototype = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
