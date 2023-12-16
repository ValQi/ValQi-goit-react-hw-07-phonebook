import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, StyledButton, StyledInput } from './ContactForm.styled';

const ContactForm = ({ contacts, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = formData;

    if (Array.isArray(contacts) && contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`Контакт з таким ім'ям вже існує`);
      return;
    }

    onSubmit({ name, number, id: nanoid() });
    setFormData({ name: '', number: '' });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Name</h3>
      <StyledInput
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleInputChange}
      />
      <h3>Number</h3>
      <StyledInput
        type="tel"
        name="number"
        required
        value={formData.number}
        onChange={handleInputChange}
      />
      <StyledButton type="submit">Додати контакт</StyledButton>
    </FormContainer>
  );
};

export default ContactForm;