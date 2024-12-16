import CSS from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={CSS.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={CSS.item}>
          <FriendListItem
            image={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;