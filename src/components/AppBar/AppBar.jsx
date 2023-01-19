import { useSelector } from 'react-redux';
import Navigation from '../Navigations';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import Container from '../Container';
import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Container>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </Container>
  );
}
