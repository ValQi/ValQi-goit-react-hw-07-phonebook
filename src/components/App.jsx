import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from './Slice/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import Filter from './FilterSearch/FilterSearch';
import ContactList from './ContactList/ContactList';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };
  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;