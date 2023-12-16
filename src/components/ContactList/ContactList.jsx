import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'components/Slice/operationsApi';
import { selectVisibleContacts } from 'components/Slice/selectorsApi';
import { StyledList, ItemName, DeleteButton } from './ContactList.styled';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts =  useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <StyledList>
      {filteredContacts.map(({ id, name, phone }) => (
        <ItemName key={id}>
          <p>
          <ItemName>{name}:</ItemName>  {phone}
          </p>
          <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete But
          </DeleteButton>
        </ItemName>
      ))}
    </StyledList>
  );
};

export default ContactList;