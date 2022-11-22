import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import friends from 'friends.json';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem />
    </ul>
  );
};
const FriendListItem = () => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className={css.item} key={id}>
        <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};
export default FriendList;
FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};
