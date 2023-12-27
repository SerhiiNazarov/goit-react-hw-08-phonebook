import { TiTimesOutline } from 'react-icons/ti';
import {
  ContactsList,
  ContactsItem,
  ContactsText,
  Button,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filter/filter.selectors';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const getFilterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filterContact;
};

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = getFilterContacts(contacts, filter);

  return (
    <ContactsList>
      {filteredContacts.map(({ _id, name, phone, email }) => (
        <ContactsItem key={_id}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{phone}</ContactsText>
          <ContactsText>{email}</ContactsText>
          <Button
            type="button"
            onClick={() => {
              dispatch(contactsOperations.deleteContact(_id));
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
