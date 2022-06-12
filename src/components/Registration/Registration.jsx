import { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './registration.module.css';

const Registration = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
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
    setState({ name: '', email: '', password: '' });
  };
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.box}>
      <label htmlFor="name" className={styles.text}>
        Name
      </label>
      <input
        type="text"
        value={name}
        name="name"
        id="name"
        placeholder="Enter Name"
        className={styles.input}
        onChange={handleChange}
      />

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
      <button className={styles.btn}>Sign Up</button>
    </form>
  );
};

export default Registration;

Registration.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
