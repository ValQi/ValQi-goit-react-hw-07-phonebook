import React, { useState } from 'react';
import { FormContainer, StyledButton, StyledInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Slice/selectorsApi';
import { addContact } from 'components/Slice/operationsApi';

const ContactForm = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const normalizedContactName = contactName.toLowerCase();

    if (!contactName.trim() || !number.trim()) {
      window.alert('Поля не можуть бути порожніми');
      return;
    }

    if (visibleContacts.some(({ name }) => name.toLowerCase() === normalizedContactName)) {
      window.alert(`${contactName} Контакт з таким ім'ям вже існує`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        phone: number, 
      })
    );
    setContactName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>
        Name:
        <StyledInput
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Олег, Андрій Гришко."
          required
        />
      </label>

      <label>
        Number:
        <StyledInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          required
        />
      </label>

      <StyledButton type="submit">Add contact</StyledButton>
    </FormContainer>
  );
};

export default ContactForm