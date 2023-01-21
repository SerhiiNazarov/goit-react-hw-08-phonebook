import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import Container from 'components/Container';
import FormPhonebook from 'components/FormPhonebook';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

export default function Contacts() {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Add Contact</h2>
      <FormPhonebook />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <p style={{ color: 'red' }}>
          Your phonebook is empty. Please add contact.
        </p>
      )}
    </Container>
  );
}
