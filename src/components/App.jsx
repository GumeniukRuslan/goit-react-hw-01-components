import { Profile } from "./profile/Profile";
import { Statistics } from "./statistic/Statistic";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import transactions from './transactions.json'
import freinds from './friends.json'
import user from './user.json'
import data from './data.json'
export const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} title='Upload stats' />

      <FriendList data={freinds} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
