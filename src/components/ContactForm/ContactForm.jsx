import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class ContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '', // state for <input name>
      number: '', // state for <input number>
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (this.props.addContact(newContact)) {
      this.setState({
        name: '',
        number: '',
      });
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form className={css.contactForm} onSubmit={this.handleFormSubmit}>
          <label>
            <p>Name</p>
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              placeholder="Enter Full Name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter Phone Number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" className={css.submitButton}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
