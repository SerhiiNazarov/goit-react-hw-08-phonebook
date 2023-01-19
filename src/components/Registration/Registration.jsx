import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Formik, ErrorMessage } from 'formik';
import { Formfield, Input, Label, Button } from './Registration.styled';

export default function RegisterView() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      //   validationSchema={schema}
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
          Email
          <Input type="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: '#d95d5d' }}
          />
        </Label>
        <Label>
          Password
          <Input type="text" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: '#d95d5d' }}
          />
        </Label>
        <Button type="submit">Register</Button>
      </Formfield>
    </Formik>
  );
}
