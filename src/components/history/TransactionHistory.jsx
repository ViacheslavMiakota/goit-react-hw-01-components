import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import transactions from 'transactions.json';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.table}>
        <tr>
          <th className={css.headerTab}>Type</th>
          <th className={css.headerTab}>Amount</th>
          <th className={css.headerTab}>Currency</th>
        </tr>
      </thead>
      <HistoryItem />
    </table>
  );
};

const HistoryItem = () => {
  return transactions.map(({ id, type, amount, currency }) => {
    return (
      <tbody key={id}>
        <tr>
          <td className={css.rowTab}>{type}</td>
          <td className={css.rowTab}>{amount}</td>
          <td className={css.rowTab}>{currency}</td>
        </tr>
      </tbody>
    );
  });
};
export default TransactionHistory;
TransactionHistory.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
