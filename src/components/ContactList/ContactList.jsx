import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

class ContactList extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, filter, deleteContact } = this.props;

    return (
      <div>
        <ul className={css.contactListContainer}>
          {contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              filter={filter}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
