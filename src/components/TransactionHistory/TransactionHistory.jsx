import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { Table, TableHead } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
        {items.map(transaction => (
          <TransactionItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
