import Registration from 'components/Registration';
import Container from 'components/Container';
import { Helmet } from 'react-helmet';

export default function RegisterView() {
  return (
    <Container>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>
      <Registration />
    </Container>
  );
}
