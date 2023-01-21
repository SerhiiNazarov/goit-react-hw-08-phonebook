import { useDispatch, useSelector } from 'react-redux';
import { Container, Name, Avatar, Button } from './UserMenu.styled';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="" width="32" />
      <Name>{name}</Name>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </Button>
    </Container>
  );
}
