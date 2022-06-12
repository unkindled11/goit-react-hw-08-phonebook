import { NavLink, Outlet } from 'react-router-dom';

import useIsLogin from 'shared/hooks/login-hook';

import UserMenu from 'components/UserMenu';
import styles from './layOut.module.css';

const doActive = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;

const LayOut = () => {
  const isLogin = useIsLogin();
  return (
    <>
      <div className={styles.box}>
        <ul className={styles.nav}>
          <li className={styles.item}>
            <NavLink to="/" className={doActive}>
              Home
            </NavLink>
          </li>
          <li className={isLogin ? `${styles.item}` : `${styles.private}`}>
            <NavLink to="/contacts" className={doActive}>
              Contacts
            </NavLink>
          </li>
        </ul>
        {!isLogin && (
          <div>
            <ul className={styles.nav}>
              <li className={styles.item}>
                <NavLink to="/register" className={doActive}>
                  Register
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/login" className={doActive}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {isLogin && <UserMenu />}
      </div>
      <Outlet />
    </>
  );
};

export default LayOut;
