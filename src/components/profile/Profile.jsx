import { Description } from '../description/Description';
import { Stats } from '../stats/Stats';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <Description image={avatar} name={username} tag={tag} location={location} />
    <Stats stats={stats} />
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
