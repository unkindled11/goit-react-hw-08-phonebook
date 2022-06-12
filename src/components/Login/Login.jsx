import { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './login.module.css';

const Login = ({ onSubmit }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ email: '', password: '' });
  };
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.box}>
      <label htmlFor="email" className={styles.text}>
        Email
      </label>
      <input
        type="email"
        value={email}
        name="email"
        id="email"
        placeholder="Enter email"
        className={styles.input}
        onChange={handleChange}
      />

      <label htmlFor="password" className={styles.text}>
        Password
      </label>
      <input
        type="password"
        value={password}
        name="password"
        id="password"
        placeholder="Enter password"
        className={styles.input}
        onChange={handleChange}
      />
      <button className={styles.btn}>Log In</button>
    </form>
  );
};

export default Login;

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
