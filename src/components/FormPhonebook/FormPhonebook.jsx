import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Formfield, Input, Label, Button } from './FormPhonebook.styled';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

export default function FormPhonebook({ closeModal }) {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    phone: '',
    email: '',
  };

  const patternName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const patternNumber =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name is too Short!')
      .max(30, 'name is too Long!')
      .matches(
        patternName,
        'Name may contain only latin letters, apostrophe, dash and spaces.'
      )
      .required(),
    phone: yup
      .string()
      .min(6, 'Phone number must be less than 6 characters')
      .matches(patternNumber, 'Phone number is not valid')
      .required(),
    email: yup.string().min(6, 'Email must be less than 6 characters'),
  });

  const handleSubmit = ({ name, phone, email }, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      alert(`${name} is already in contacts.`);
      resetForm();
    } else if (contacts.find(contact => contact.phone === phone)) {
      alert(`${phone} is already in contacts.`);
      resetForm();
    } else {
      dispatch(contactsOperations.addContact({ name, phone, email }));
      resetForm();
      closeModal();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Formfield autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            style={{ color: '#d95d5d' }}
          />
        </Label>
        <Label>
          Phone
          <Input type="tel" name="phone" />
          <ErrorMessage
            name="phone"
            component="div"
            style={{ color: '#d95d5d' }}
          />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: '#d95d5d' }}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Formfield>
    </Formik>
  );
}
