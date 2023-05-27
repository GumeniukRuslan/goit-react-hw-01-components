import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, isOnline, userName, id }) => {
  return (
  <li id={id} className={css.freindItem}>
    <span className={isOnline ? `${css.status} ${css.online}` : `${css.status} ${css.notOnline}`}></span>
    <img className="avatar" src={avatar} alt={userName} width="38" />
    <p className="name">{userName}</p>
  </li>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
} 