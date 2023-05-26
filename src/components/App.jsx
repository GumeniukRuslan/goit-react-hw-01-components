import { Profile } from "./profile/Profile";
import user from './user.json'
export const App = () => {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
