import {
  ListItem,
  Status,
  Avatar,
  UserName,
} from 'components/FriendListItem/FriendListItem.styled';
import { IFriend } from 'components/FriendList/FriendList';

type Prop = Pick<IFriend, "avatar" | "name" | "isOnline"> 

export function FriendListItem({ avatar, name, isOnline }: Prop) {
  return (
    <ListItem>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={`${name} avatar`} width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
}
