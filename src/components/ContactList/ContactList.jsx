import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number, contactType }) => {
        return (
          <li key={id} className={s.contactItem}>
            <Contact
              name={name}
              number={number}
              contactType={contactType}
              onDelete={() => onDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
