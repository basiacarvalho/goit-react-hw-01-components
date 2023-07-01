import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <div
        className={clsx(
          css.status,
          isOnline && css.online,
          !isOnline && css.offline
        )}
      ></div>
      <img className={css.avatar} src={avatar} alt="User avatar" width="90" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
