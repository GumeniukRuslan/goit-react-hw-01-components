import { FriendListItem } from "components/friendListItem/FriendListItem"
import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({data}) => {
  return <ul className={css.friendList}>
    {data.map(item => {
      return <FriendListItem id={item.id} isOnline={item.isOnline} key={item.id} avatar={item.avatar} userName={item.name} />
    })}
  </ul>
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
} 