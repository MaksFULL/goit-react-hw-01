import CSS from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={CSS.card}>
    <div className={CSS.top}>
      <img className={CSS.img} src={image} alt={`${name}avatar`} />
      <p className={CSS.name}>{name}</p>
      <p className={CSS.description}>{tag}</p>
      <p className={CSS.description}>{location}</p>
    </div>

    <ul className={CSS.stats}>
      <li className={CSS.item}>
        <span className={CSS.statsTitle}>followers</span>
        <span className={CSS.stats}>{stats.followers}</span>
      </li>
      <li className={CSS.item}>
        <span className={CSS.statsTitle}>Views</span>
        <span className={CSS.stats}>{stats.views}</span>
      </li>
      <li className={CSS.item}>
        <span className={CSS.statsTitle}>Likes</span>
        <span className={CSS.stats}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;