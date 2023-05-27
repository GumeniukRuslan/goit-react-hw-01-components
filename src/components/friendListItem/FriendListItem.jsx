import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, isOnline, userName }) => {
  return (
  <li className={css.freindItem}>
    <span className={isOnline ? `${css.status} ${css.online}` : `${css.status} ${css.notOnline}`}></span>
    <img className="avatar" src={avatar} alt={userName} width="38" />
    <p className="name">{userName}</p>
  </li>)
}