import PropTypes from 'prop-types';
import {
  ListItem,
  Status,
  Avatar,
  UserName,
} from 'components/FriendListItem/FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={`${name} avatar`} width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
