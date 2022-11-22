import Profile from 'components/profile/Profile.jsx';
import Statistics from 'components/statistics/Statistics.jsx';
import FriendList from 'components/friendList/FriendList.jsx';
// import TransactionHistory from 'components/history/TransactionHistory.jsx';
import user from 'user.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" />
      <FriendList />
      {/* <TransactionHistory /> */}
    </div>
  );
};
export default App;
