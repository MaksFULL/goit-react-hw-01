import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Profile from "./src/Components/Profile/Profile";
import FriendList from "./src/Components/FriendList/FriendList";
import Transactionhistory from "./src/Components/TransactionHistory/TransactionHistory";


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