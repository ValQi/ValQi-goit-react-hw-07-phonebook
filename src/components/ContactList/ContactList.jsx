import React from 'react';
import { StyledList, DeleteButton, ItemName } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <ItemName key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDelete(contact.id)}>Видалити</DeleteButton>
        </ItemName>
      ))}
    </StyledList>
  );
};

export default ContactList;