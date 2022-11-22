import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  username,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  console.log(username);
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
Profile.prototype = {
  username: PropTypes.string,
  avatar: PropTypes.images,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
