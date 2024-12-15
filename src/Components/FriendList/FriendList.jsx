


const FriendList = ({ friends }) => {
    return <ul classname={CSS.list}>
        {friends.map((friend) => (
            <li key={friend.id} className={CSS.item}>
            <FriendList image={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            </li>
        ))}
    </ul>    

}