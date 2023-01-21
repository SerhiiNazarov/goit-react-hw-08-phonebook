import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Formik, ErrorMessage } from 'formik';
import { Formfield, Input, Label, Button } from './LoginForm.styled';

export default function RegisterView() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Formfield autoComplete="off">
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
        <Button type="submit">LogIn</Button>
      </Formfield>
    </Formik>
  );
}
