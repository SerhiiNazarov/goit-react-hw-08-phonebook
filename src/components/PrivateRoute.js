// import { useSelector } from 'react-redux';
// import { Route, Navigate } from 'react-router-dom';
// import authSelectors from 'redux/auth/auth-selectors';

// function PrivateRoute({ children, ...routeProps }) {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
//   return <Route>{isLoggedIn ? children : <Navigate to="/login" />}</Route>;
// }

// export default PrivateRoute;

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isAuth } from 'redux/auth/authSelectors';

// export const PrivateRoute = ({ children }) => {
//   const isLogin = useSelector(isAuth);

//   if (!isLogin) {
//     return <Navigate to="/login" />;
//   }
//   //   return <Outlet />;
//   return children;
// };

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
