import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchFilter from './SearchFilter/SearchFilter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [changeTrigger, setChangeTrigger] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem('contactsList');

    if (localData !== null && JSON.parse(localData).length > 0) {
      setContacts(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    if (changeTrigger) {
      localStorage.setItem('contactsList', JSON.stringify(contacts));
      setChangeTrigger(prevState => !prevState);
    }
  }, [contacts, changeTrigger]);

  const addContact = newContact => {
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!contactExists) {
      setContacts(prevState => [...prevState, newContact]);
      setChangeTrigger(prevState => !prevState);
      return true;
    }

    return false;
  };

  const deleteContact = toDelete => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== toDelete)
    );
    setChangeTrigger(prevState => !prevState);
  };

  const changeFilter = filterVal => {
    setFilter(filterVal);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <SearchFilter filter={filter} changeFilter={changeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
