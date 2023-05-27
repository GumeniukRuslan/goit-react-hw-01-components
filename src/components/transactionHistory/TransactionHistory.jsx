import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr>
          <th className={css.thead}>Type</th>
          <th className={css.thead}>Amount</th>
          <th className={css.thead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({id, type, amount, currency}) => {
          return (
            <tr className={css.transaction} key={id} id={id}>
              <td className={css.transactionType}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ) 
        })}
        
      </tbody>
  </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
} 