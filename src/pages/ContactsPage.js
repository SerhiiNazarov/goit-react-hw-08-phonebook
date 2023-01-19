import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Helmet } from 'react-helmet';
import Container from 'components/Container';
import FormPhonebook from 'components/FormPhonebook';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { contactsSelectors } from 'redux/contacts';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Add Contact</title>
      </Helmet>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FormPhonebook />
          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 ? (
            <Contacts />
          ) : (
            <p style={{ color: 'red' }}>
              Your phonebook is empty. Please add contact.
            </p>
          )}
        </>
      )}
    </Container>
  );
}
