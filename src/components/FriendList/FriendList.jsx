import "./FriendsListmodule.css"

const FriendList =  ({friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((friend)=>(
        <li key={friend.id} className="friends-card"><div>
          <img className="friend-avatar-image" src={friend.avatar} alt="Avatar" width="48" />
          <p className="friend-name-text">{friend.name}</p>
          <p className="friend-status">
            {friend.isOnline?(<span className="friend-status-online">Online</span>):(<span className="friend-status-offline">Offline</span>)}
          </p>
  </div>
  </li>))}
  </ul>)
};


export default FriendList