import { Link } from './AuthNav.styled';

const styles = {
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" activestyle={styles.activeLink}>
        Register
      </Link>
      <Link to="/login" activestyle={styles.activeLink}>
        Log In
      </Link>
    </div>
  );
}
