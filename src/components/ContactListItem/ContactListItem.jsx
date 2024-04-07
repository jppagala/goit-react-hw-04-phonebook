import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

class ContactListItem extends React.Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number } = this.props.contact;
    const { deleteContact } = this.props;

    return (
      <li className={css.contactItem}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
