import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import data from 'data.json';
import StatisticEvent from 'components/event/Event.jsx';

const Statistics = ({ title }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : false}
      <StatisticEvent events={data} />
    </section>
  );
};
export default Statistics;
Statistics.prototype = {
  title: PropTypes.string,
  StatisticEvent: PropTypes.array.isRequired,
};
