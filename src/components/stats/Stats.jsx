import css from './Stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => (
  <ul className={css.stats}>
    {Object.entries(stats).map(([key, value]) => (
      <li className={css.stat} key={key}>
        <span className={css.label}>{initialLetter(key)}</span>
        <span className={css.quantity}>{value}</span>
      </li>
    ))}
  </ul>
);

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

function initialLetter(word) {
  const firstLetter = word.charAt(0);
  return firstLetter.toUpperCase() + word.slice(1);
}
