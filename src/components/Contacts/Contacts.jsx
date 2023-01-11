import { TiTimesOutline } from 'react-icons/ti';
import {
  ContactsList,
  ContactsItem,
  ContactsText,
  Button,
} from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const getFilterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filterContact;
};

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = getFilterContacts(contacts, filter);

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsText>
            {name}: {number}
          </ContactsText>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <TiTimesOutline
              style={{
                color: 'var(--accentColor)',
              }}
            />
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
}

export default Contacts;
