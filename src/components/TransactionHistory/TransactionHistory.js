import React from 'react';
import T from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}$</td>
            <td>{el.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.number.isRequired,
      date: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
