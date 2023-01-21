import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';
import Navigation from 'components/Navigations';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import Container from 'components/Container';
import authSelectors from 'redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
}
