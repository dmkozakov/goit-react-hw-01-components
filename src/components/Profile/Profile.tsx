
import css from './Profile.module.css';

interface Stats {
  followers: number;
  views: number;
  likes: number
}

interface IProfile {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats
}

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}: IProfile) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={`${username} avatar`} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
