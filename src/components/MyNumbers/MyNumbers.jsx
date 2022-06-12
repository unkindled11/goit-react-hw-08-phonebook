import { useState, useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Form from './Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import Loader from 'shared/shared-components/loader/Loader';

import { getContacts, getLoading, getError } from 'redux/contacts/selector';
import {
  getUserContacts,
  addContact,
  removeContact,
} from 'redux/contacts/operations';

import styles from './myNumbers.module.css';

const MyNumbers = () => {
  const contacts = useSelector(getContacts, shallowEqual);

  const isLoading = useSelector(getLoading, shallowEqual);

  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getUserContacts());
  }, [dispatch]);

  const addContacts = useCallback(
    data => dispatch(addContact(data)),
    [dispatch]
  );

  const deleteNumber = useCallback(
    id => dispatch(removeContact(id)),
    [dispatch]
  );

  const changeFilter = useCallback(e => setFilter(e.target.value), [setFilter]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterRequest = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const res = name.toLowerCase().includes(filterRequest);
      return res;
    });

    return filteredContacts;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form onSubmit={addContacts} />

      <h2 className={styles.title}>Contacts</h2>

      <Filter onChange={changeFilter} filter={filter} />

      {error && <div className={styles.error}>{error}</div>}

      {isLoading && <Loader />}

      <ContactList
        contacts={getFilteredContacts()}
        deleteNumber={deleteNumber}
      />
    </div>
  );
};

export default MyNumbers;
