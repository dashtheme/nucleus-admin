import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface Transaction {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'credit',
      amount: 2500.00,
      description: 'Payment from John Doe',
      date: '2024-03-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      amount: 1200.50,
      description: 'Office Supplies',
      date: '2024-03-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      amount: 4500.00,
      description: 'Client Payment',
      date: '2024-03-14',
      status: 'pending'
    },
    {
      id: 4,
      type: 'debit',
      amount: 800.00,
      description: 'Software Subscription',
      date: '2024-03-13',
      status: 'completed'
    },
    {
      id: 5,
      type: 'debit',
      amount: 95.20,
      description: 'Team Lunch',
      date: '2024-03-13',
      status: 'failed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'pending':
        return 'text-warning';
      case 'failed':
        return 'text-danger';
      default:
        return '';
    }
  };

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Recent Transactions</h5>
        <button className="btn btn-sm btn-outline-primary">View All</button>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover">
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>
                    <div className={`icon-wrapper ${transaction.type === 'credit' ? 'bg-success-light' : 'bg-danger-light'} rounded-circle p-2 me-2`}>
                      <FontAwesomeIcon 
                        icon={transaction.type === 'credit' ? faArrowUp : faArrowDown}
                        className={transaction.type === 'credit' ? 'text-success' : 'text-danger'}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="transaction-details">
                      <div className="fw-bold">{transaction.description}</div>
                      <small className="text-muted">{transaction.date}</small>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="amount fw-bold">
                      {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </div>
                    <small className={`status ${getStatusColor(transaction.status)}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
