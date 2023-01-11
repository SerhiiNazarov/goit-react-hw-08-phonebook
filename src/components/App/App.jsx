import FormPhonebook from '../FormPhonebook';
import Container from '../Container';
import Contacts from '../Contacts';
import Filter from '../Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
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
    </Container>
  );
}
