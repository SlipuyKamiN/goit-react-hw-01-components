import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers: </Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views: </Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes: </Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
