import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUser } from 'redux/user/user-selectors';
import { logout } from 'redux/user/user-operations';

import styles from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser, shallowEqual);

  const userLogout = () => {
    return dispatch(logout());
  };

  return (
    <>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <p className={styles.text}> {name}</p>
        </li>
        <li className={styles.item}>
          <button type="button " className={styles.btn} onClick={userLogout}>
            Log out
          </button>
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
