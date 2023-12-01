import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export interface IFriend {
  id: number;
  avatar: string;
  isOnline: boolean;
  name: string;
}

interface Prop{
  friends: IFriend []
}

export function FriendList({ friends }: Prop) {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        );
      })}
    </List>
  );
}
