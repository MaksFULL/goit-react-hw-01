import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import Transactionhistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
    <Profile 
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
    />
    <FriendList friends={friends}/>
    <Transactionhistory items={transactions}/>
    </>
  );
};

export default App;