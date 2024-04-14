import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.contactListContainer}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
