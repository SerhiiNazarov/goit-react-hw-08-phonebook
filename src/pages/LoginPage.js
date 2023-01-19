import { Helmet } from 'react-helmet';
import Container from 'components/Container';
import Login from 'components/Login';

export default function LoginPage() {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </Container>
  );
}
