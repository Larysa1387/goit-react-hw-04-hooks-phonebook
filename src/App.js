import React, { useState } from 'react';
import UseLocaleStorage from './hooks/UseLocaleStorage';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';

export default function App() {
  const [contacts, setContacts] = UseLocaleStorage(
  'contacts', []);
  const [filter, setFilter] = useState('');

  const contactPhonebookSubmit = (newContact) => {
    const { name, number, contactType, id } = newContact;
    setContacts((prevState) => [{ name, number, contactType, id }, ...prevState]);
  };

  const changeFilter = (e) => {
      setFilter(e.currentTarget.value );
    };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const deleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId),
    );
    setFilter('');
  };

  const visibleContacts = getVisibleContact();
  return (
    <div className="App">
      <h1 className="App-header">Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={contactPhonebookSubmit} />
      <h2 className="App-header">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {visibleContacts.length !== 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <p className="plug-paragraph">No contact exists</p>
        )}
    </div>
  );
}
