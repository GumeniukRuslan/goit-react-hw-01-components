import { FriendListItem } from "components/friendListItem/FriendListItem"
import css from './FriendList.module.css'

export const FriendList = ({data}) => {
  return <ul className={css.friendList}>
    {data.map(item => {
      return <FriendListItem isOnline={item.isOnline} key={item.id} avatar={item.avatar} userName={item.name} />
    })}
  </ul>
}