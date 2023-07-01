import data from './resources/data.json';
import user from './resources/user.json';
import friends from './resources/friends.json';
import transactions from './resources/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactionhistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f5f4fa',
        padding: '80px 0',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
