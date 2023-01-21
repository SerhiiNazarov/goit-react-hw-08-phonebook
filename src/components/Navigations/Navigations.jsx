import { Link } from './Navigations.styled';
import { useAuth } from 'hooks';

const styles = {
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/" activestyle={styles.activeLink} end>
        Home
      </Link>

      {isLoggedIn && (
        <Link to="/contacts" activestyle={styles.activeLink}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
