import PropTypes from 'prop-types';
import {
  FriendCard,
  StatusMarker,
  Avatar,
  Name,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <StatusMarker isOnline={isOnline}></StatusMarker>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
