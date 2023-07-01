import css from './Description.module.css';
import PropTypes from 'prop-types';

export const Description = ({ image, name, tag, location }) => (
  <div className={css.description}>
    <img src={image} alt="User avatar" className={css.avatar} />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
);

Description.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
