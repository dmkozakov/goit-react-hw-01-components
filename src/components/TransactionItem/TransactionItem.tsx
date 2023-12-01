import { ITransaction } from 'components/TransactionHistory/TransactionHistory';
import { Row } from './TransactionItem.styled';

type Prop = Pick<ITransaction, "type" | "amount" | "currency"> 

export function TransactionItem({ type, amount, currency }: Prop) {
  return (
    <Row>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Row>
  );
}
